<?php

/*class Connection {

    public static function connect() {

        $host = $_ENV['samlam24.treok.io'];
        $db   = $_ENV['samlam24_RedFolderGames'];
        $user = $_ENV['samlam24_Maintainer'];
        $pass = $_ENV['!ik6AysEf7g7Jfo8'];

        return new PDO(
            "mysql:host=$host;dbname=$db;charset=utf8",
            $user,
            $pass
        );
    }

}*/

function connectDB(){
    static $connection;
    if(!isset($connection)) {
        $connection = connect();
    }      
    return $connection;
}

function connect() {
    
    $host = getenv('DB_HOST', true) ?: "samlam24.treok.io";
    //$port = getenv('DB_PORT', true) ?: 3306; 
    $dbname = getenv('DB_NAME', true) ?: "samlam24_RedFolderGames"; 
    $user = getenv('DB_USERNAME', true) ?: "samlam24_Maintainer"; 
    $password = getenv('DB_PASSWORD', true) ?: "!ik6AysEf7g7Jfo8"; 
   
    $connectionString = "mysql:host=$host;dbname=$dbname;port=$port;charset=utf8";

    try {       
            $pdo = new PDO($connectionString, $user, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
    } catch (PDOException $e){
            echo "Virhe tietokantayhteydessä: " . $e->getMessage();
            die();
    }
}