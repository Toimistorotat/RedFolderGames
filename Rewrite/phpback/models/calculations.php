<?php
require_once "connection.php";

function addCalculations(string $name, string $expression, string $date): int
{
    $pdo = connectDB();

    $stmt = $pdo->prepare(
        'INSERT INTO calculations (name, expression, `date`) VALUES (?, ?, ?)'
    );

    $stmt->execute([$name, $expression, $date]);

    return $pdo->lastInsertId();
}

function getCalculations(): array
{
    $pdo = connectDB();

    $stmt = $pdo->prepare('SELECT * FROM calculations ORDER BY `date` DESC');
    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function deleteCalculations(int $id): void
{
    $pdo = connectDB();

    $stmt = $pdo->prepare('DELETE FROM calculations WHERE id = ?');
    $stmt->execute([$id]);
}