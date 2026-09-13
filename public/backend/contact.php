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

if ($resp === false) {
    http_response_code(502);
    echo json_encode(['error' => 'Email provider error', 'detail' => $curlErr]);
    exit;
}

if ($httpCode < 200 || $httpCode >= 300) {
    http_response_code(502);
    $decoded = json_decode($resp, true);
    echo json_encode(['error' => 'Email provider error', 'detail' => $decoded ?? $resp]);
    exit;
}

echo json_encode(['success' => true]);
exit;
