<?php
require_once "connection.php";

function addFeedback(string $name, string $message, string $date): int
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'INSERT INTO feedback (name, message, `date`) VALUES (?, ?, ?)'
    );

    $stmt->execute([$name, $message, $date]);

    return $pdo->lastInsertId();
}

function getFeedback(): array
{
    $pdo = connectDB();

    $stmt = $pdo->prepare('SELECT * FROM feedback ORDER BY `date` DESC');
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function deleteFeedback(int $id): void
{
    $pdo = connectDB();

    $stmt = $pdo->prepare('DELETE FROM feedback WHERE id = ?');
    $stmt->execute([$id]);
}