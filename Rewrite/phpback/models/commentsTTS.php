<?php
require_once "connection.php";

function addCommentTTS(string $section_id, ?int $parent_id, string $name, string $comment): int
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'INSERT INTO commentstts (section_id, parent_id, name, comment)
         VALUES (?, ?, ?, ?)'
    );

    $stmt->execute([$section_id, $parent_id, $name, $comment]);

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

