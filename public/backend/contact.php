<?php
header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');
$website = trim($data['website'] ?? '');
$ts = intval($data['ts'] ?? 0);

$ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? ($_SERVER['HTTP_CLIENT_IP'] ?? ($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$ip = explode(',', $ip)[0];

// Honeypot
if ($website !== '') {
    http_response_code(400);
    echo json_encode(['error' => 'Spam detected']);
    exit;
}

// Timestamp anti-bot (ts in ms)
$nowMs = (int) (microtime(true) * 1000);
if ($ts && ($nowMs - $ts) < 3000) {
    http_response_code(400);
    echo json_encode(['error' => 'Submission too fast']);
    exit;
}

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Missing fields']);
    exit;
}

$resendApiKey = getenv('RESEND_API_KEY');
$mailTo = getenv('MAIL_TO') ?: 'hernandezgalvezalejandro@gmail.com';
$mailFrom = getenv('MAIL_FROM') ?: 'contacto@elcreadorweb.com';

// Fallback: if env var not set, try to read a local .env file in the same folder
if (!$resendApiKey) {
    $envFile = __DIR__ . '/.env';
    if (is_readable($envFile)) {
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos(trim($line), '#') === 0) continue;
            [$k, $v] = array_map('trim', explode('=', $line, 2) + [1 => '']);
            if ($k === 'RESEND_API_KEY' && $v !== '') {
                $resendApiKey = $v;
            }
            if ($k === 'MAIL_TO' && ($mailTo === '' || $mailTo === null)) {
                $mailTo = $v;
            }
            if ($k === 'MAIL_FROM' && ($mailFrom === '' || $mailFrom === null)) {
                $mailFrom = $v;
            }
        }
    }
}

if (!$resendApiKey) {
    http_response_code(500);
    echo json_encode(['error' => 'Server misconfiguration: missing RESEND_API_KEY']);
    exit;
}

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

$emailHtml = "<p><strong>Nombre:</strong> " . h($name) . "</p>" .
    "<p><strong>Email:</strong> " . h($email) . "</p>" .
    "<p><strong>Asunto:</strong> " . h($subject) . "</p>" .
    "<p><strong>Mensaje:</strong><br/>" . nl2br(h($message)) . "</p>" .
    "<p><small>IP: " . h($ip) . "</small></p>";

$payload = [
    'from' => $mailFrom,
    'to' => $mailTo,
    'subject' => 'Contacto desde web: ' . ($subject !== '' ? $subject : $name),
    'html' => $emailHtml,
];

// Use stream context + file_get_contents to POST to the Resend API
$options = [
    'http' => [
        'method' => 'POST',
        'header' => "Authorization: Bearer " . $resendApiKey . "\r\n" .
                    "Content-Type: application/json\r\n",
        'content' => json_encode($payload),
        'ignore_errors' => true,
        'timeout' => 10,
    ],
];

$context = stream_context_create($options);
$resp = @file_get_contents('https://api.resend.com/emails', false, $context);

$httpCode = 0;
if (isset($http_response_header) && is_array($http_response_header) && count($http_response_header) > 0) {
    if (preg_match('#HTTP/\d+\.\d+\s+(\d+)#', $http_response_header[0], $m)) {
        $httpCode = intval($m[1]);
    }
}

$curlErr = null;
if ($resp === false) {
    $err = error_get_last();
    $curlErr = $err['message'] ?? 'Unknown error';
}

// Log any provider errors for debugging (file: public/backend/contact.log)
function log_provider_error($info) {
    $logFile = __DIR__ . '/contact.log';
    $entry = '[' . date('c') . '] ' . $info . PHP_EOL;
    @file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);
}

if ($resp === false) {
    log_provider_error('request-failed: ' . ($curlErr ?? 'unknown'));
    http_response_code(502);
    echo json_encode(['error' => 'Email provider error', 'detail' => $curlErr]);
    exit;
}

if ($httpCode < 200 || $httpCode >= 300) {
    $decoded = json_decode($resp, true);
    $detail = $decoded ?? $resp;
    log_provider_error('provider-response code=' . $httpCode . ' body=' . (is_string($resp) ? $resp : json_encode($resp)));
    http_response_code(502);
    echo json_encode(['error' => 'Email provider error', 'detail' => $detail]);
    exit;
}

echo json_encode(['success' => true]);
exit;
