<?php
function connectDB(){
    static $connection;
    if(!isset($connection)) {
        $connection = connect();
    }      
    return $connection;
}

function connect() {
    
    $host = getenv('DB_HOST', true) ?: "samlam24.treok.io";
    $port = getenv('DB_PORT', true) ?: 8888; 
    $dbname = getenv('DB_NAME', true) ?: "samlam24_RedFolderGames"; 
    $user = getenv('DB_USERNAME', true) ?: "samlam24_Maintainer"; 
    $password = getenv('DB_PASSWORD', true) ?: "g6zr#@cecSEKNojrjRY?!orynE9Yk3JhGpcR@3!e"; 
   
    $connectionString = "mysql:host=$host;port=$port;dbname=$dbname;charset=utf8";

    try {       
            $pdo = new PDO($connectionString, $user, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
    } catch (PDOException $e){
            echo "Virhe tietokantayhteydessä: " . $e->getMessage();
            die();
    }
}