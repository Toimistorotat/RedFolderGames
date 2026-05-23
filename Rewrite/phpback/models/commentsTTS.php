<?php
require_once "connection.php";

function getClientIp(): string
{
    $headers = [
        'HTTP_CF_CONNECTING_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_REAL_IP',
        'REMOTE_ADDR'
    ];

    foreach ($headers as $header) {
        if (!empty($_SERVER[$header])) {
            $value = explode(',', $_SERVER[$header])[0];
            return trim($value);
        }
    }

    return "unknown";
}

function checkCommentRateLimit(string $ip, int $limit = 5, int $windowSeconds = 600): array
{
    $pdo = connectDB();

    $cleanup = $pdo->prepare(
        'DELETE FROM comment_rate_limits
         WHERE created_at < DATE_SUB(NOW(), INTERVAL ? SECOND)'
    );
    $cleanup->execute([$windowSeconds * 6]);

    $stmt = $pdo->prepare(
        'SELECT COUNT(*) AS comment_count
         FROM comment_rate_limits
         WHERE ip_address = ?
         AND created_at >= DATE_SUB(NOW(), INTERVAL ? SECOND)'
    );
    $stmt->execute([$ip, $windowSeconds]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $count = (int)($row['comment_count'] ?? 0);

    if ($count >= $limit) {
        return [
            "allowed" => false,
            "remaining" => 0,
            "limit" => $limit,
            "windowSeconds" => $windowSeconds
        ];
    }

    return [
        "allowed" => true,
        "remaining" => $limit - $count - 1,
        "limit" => $limit,
        "windowSeconds" => $windowSeconds
    ];
}

function recordCommentRateLimit(string $ip): void
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'INSERT INTO comment_rate_limits (ip_address)
         VALUES (?)'
    );
    $stmt->execute([$ip]);
}

function addCommentTTS(string $game_id, string $section_id, ?int $parent_id, string $name, string $comment): int
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'INSERT INTO commentstts (game_id, section_id, parent_id, name, comment)
         VALUES (?, ?, ?, ?, ?)'
    );

    $stmt->execute([$game_id, $section_id, $parent_id, $name, $comment]);

    return $pdo->lastInsertId();
}

function getCommentsTTS(): array
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'SELECT * FROM commentstts ORDER BY created_at DESC, id DESC'
    );
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getCommentsBySectionTTS(string $section_id): array
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'SELECT * FROM commentstts
         WHERE section_id = ?
         ORDER BY created_at DESC, id DESC'
    );
    $stmt->execute([$section_id]);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getCommentsByGameTTS(string $game_id): array
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        "SELECT * FROM commentstts
         WHERE game_id = ? OR (game_id IS NULL AND ? = 'tts')
         ORDER BY created_at DESC, id DESC"
    );
    $stmt->execute([$game_id, $game_id]);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}
