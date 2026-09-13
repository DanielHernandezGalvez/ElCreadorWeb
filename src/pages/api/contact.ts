const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // max submissions per IP per window

const rateMap = new Map<string, { count: number; first: number }>();

export async function POST({ request }: { request: Request }) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();

    // rate limiting
    const entry = rateMap.get(ip) || { count: 0, first: now };
    if (now - entry.first < RATE_LIMIT_WINDOW) {
      if (entry.count >= RATE_LIMIT_MAX) {
        return new Response(JSON.stringify({ error: 'Too many requests' }), { status: 429 });
      }
      entry.count += 1;
    } else {
      entry.count = 1;
      entry.first = now;
    }
    rateMap.set(ip, entry);

    const body = await request.json();
    const { name, email, subject, message, website, ts } = body;

    // Simple anti-spam checks
    if (website) {
      return new Response(JSON.stringify({ error: 'Spam detected' }), { status: 400 });
    }

    const sentAt = Number(ts || 0);
    if (Date.now() - sentAt < 3000) {
      return new Response(JSON.stringify({ error: 'Submission too fast' }), { status: 400 });
    }

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    // Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_TO = process.env.MAIL_TO || 'hernandezgalvezalejandro@gmail.com';
    const MAIL_FROM = process.env.MAIL_FROM || 'contact@elcreadorweb.com';

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'Server misconfiguration: missing RESEND_API_KEY' }), { status: 500 });
    }

    const emailHtml = `
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Asunto:</strong> ${escapeHtml(subject || '')}</p>
      <p><strong>Mensaje:</strong><br/>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      <p><small>IP: ${escapeHtml(ip)}</small></p>
    `;

    const payload = {
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Contacto desde web: ${subject || name}`,
      html: emailHtml,
    };

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const txt = await resp.text();
      return new Response(JSON.stringify({ error: 'Email provider error', detail: txt }), { status: 502 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}

function escapeHtml(s: string) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
