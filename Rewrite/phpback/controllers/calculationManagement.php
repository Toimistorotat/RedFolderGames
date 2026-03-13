<?php
require_once "./models/calculations.php";

function addCalculationsController()
{
    $calculations = json_decode(file_get_contents('php://input'));

    if (isset($calculations->expression)) {
        
        $name = isset($calculations->name) ? trim($calculations->name) : "";
        $expression = trim($calculations->expression);
        $date = date("Y-m-d");

        if ($name === "") {
            $name = "Anonymous";
        }

        try {
            $id = addCalculations($name, $expression, $date);

            $data = [
                "id" => $id,
                "name" => $name,
                "expression" => $expression,
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

function getCalculationsController()
{
    try {
        $calculations = getCalculations();

        if ($calculations === null) {
            respond(500, ['message' => 'Internal server error']);
        } else {
            respond(200, $calculations);
        }

    } catch (Exception $e) {
        respond(500, ['message' => $e->getMessage()]);
    }
}