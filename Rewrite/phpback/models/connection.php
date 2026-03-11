<?php

class Connection {

    public static function connect() {

        $host = $_ENV['DB_HOST'];
        $db   = $_ENV['DB_NAME'];
        $user = $_ENV['DB_USER'];
        $pass = $_ENV['DB_PASS'];

        return new PDO(
            "mysql:host=$host;dbname=$db;charset=utf8",
            $user,
            $pass
        );
    }

}