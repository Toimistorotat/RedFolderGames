<?php
require_once "./models/feedback.php";

function addFeedbackController()
{
    $feedback = json_decode(file_get_contents('php://input'));

    if (isset($feedback->message)) {

        $name = isset($feedback->name) ? trim($feedback->name) : "";
        $message = trim($feedback->message);
        $date = date("Y-m-d");

        if ($name === "") {
            $name = "Anonymous";
        }

        try {
            $id = addFeedback($name, $message, $date);

            $data = [
                "id" => $id,
                "name" => $name,
                "message" => $message,
                "date" => $date
            ];

            respond(201, $data);

        } catch (Exception $e) {
            respond(500, ['message' => $e->getMessage()]);
        }

    } else {
        respond(400, ['message' => 'Message is required.']);
    }
}

function getFeedbackController()
{
    try {
        $feedback = getFeedback();

        if ($feedback === null) {
            respond(500, ['message' => 'Internal server error']);
        } else {
            respond(200, $feedback);
        }

    } catch (Exception $e) {
        respond(500, ['message' => $e->getMessage()]);
    }
}