<?php

session_start();

require_once "./helpers/helpers.php";
require_once './controllers/feedbackManagement.php';
require_once './controllers/commentsTTSManagement.php';

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

            default:
                respond(405, ["error" => "Method not allowed"]);
                break;
        }
        break;
    
    case "/api/commentstts":
        switch ($method) {

            case 'GET':
                getCommentsTTSController();
                break;

            case 'POST':
                addCommentTTSController();
                break;

            default:
                respond(405, ["error" => "Method not allowed"]);
                break;
        }
        break;

    default:
        respond(404);
}