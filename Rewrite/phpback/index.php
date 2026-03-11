<?php
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

session_start();

require_once "./helpers/helpers.php";
require_once './controllers/feedbackManagement.php';

set_exception_handler(function ($e) {
    respond(500, [
        "error" => $e->getMessage()
    ]);
});

// GET, POST, DELETE, OPTIONS, PUT
$method = $_SERVER['REQUEST_METHOD']; 
$uri = explode("?", $_SERVER["REQUEST_URI"])[0];

$route = getRoute($uri); // /api/feedback
$id = getId($uri); // /api/feedback/1

if ($method === 'OPTIONS') {
    respond(200);
    exit();
}

switch ($route) {

    case "/api/feedback":
        switch ($method) {

            case 'GET':
                getFeedbackController();
                break;

            case 'POST':
                addFeedbackController();
                break;

            case 'DELETE':
                if ($id) deleteFeedbackController($id);
                break;

        }
        break;

    default:
        respond(404);
}