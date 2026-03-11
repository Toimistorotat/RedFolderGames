<?php

function getRoute($uri) {
    $segments = explode('/', trim($uri, '/'));
    $route = null;
    if (count($segments) > 1) {
        $route = "/" . strtolower($segments[0]) . "/" . strtolower($segments[1]); // /api/notes
    }
    else {
        $route = "/" . strtolower($segments[0]);
    }

    return $route;
}

function getId($uri) {
    $segments = explode('/', trim($uri, '/'));
    $id = $segments[2] ?? null;
    return $id;
}

function respond($statusCode, $data = null)
{
    $allowedOrigins = [
        "http://localhost:5173",
        "https://alidomain.tunnus.treok.io"
    ];

    if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
        header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
        header("Access-Control-Allow-Credentials: true");
    }

    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // 200 = OK, 201 = Created, 204 = No content
    // 400 = Bad request, 401 = Unauthorized, 403 = Forbidden, 404 = Not found
    // 500 = Internal server error
    http_response_code($statusCode);

    // Kaikissa muissa paitsi 204-tilanteissa lähetetään JSON
    if ($statusCode !== 204) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    exit;
}