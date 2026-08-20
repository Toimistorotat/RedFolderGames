<?php
require_once "./models/commentsTTS.php";

function addCommentTTSController()
{
    $data = json_decode(file_get_contents('php://input'));

    if (!isset($data->section_id) || !isset($data->comment)) {
        respond(400, ['message' => 'section_id and comment are required.']);
    }

    $section_id = trim($data->section_id);
    $game_id = isset($data->game_id) ? trim($data->game_id) : "tts";
    $comment = trim($data->comment);
    $name = isset($data->name) ? trim($data->name) : "";
    $parent_id = isset($data->parent_id) && $data->parent_id !== null
        ? (int)$data->parent_id
        : null;

    if ($name === "") {
        $name = "Anonymous";
    }

    if ($game_id === "" || $section_id === "" || $comment === "") {
        respond(400, ['message' => 'game_id, section_id, and comment cannot be empty.']);
    }

    try {
        $ip = getClientIp();
        $rateLimit = checkCommentRateLimit($ip);

        if (!$rateLimit["allowed"]) {
            respond(429, [
                "message" => "Too many comments. Please wait a bit before posting again.",
                "limit" => $rateLimit["limit"],
                "windowSeconds" => $rateLimit["windowSeconds"]
            ]);
        }

        $id = addCommentTTS($game_id, $section_id, $parent_id, $name, $comment);
        recordCommentRateLimit($ip);

        respond(201, [
            "id" => $id,
            "game_id" => $game_id,
            "section_id" => $section_id,
            "parent_id" => $parent_id,
            "name" => $name,
            "comment" => $comment
        ]);
    } catch (Exception $e) {
        respond(500, ['message' => $e->getMessage()]);
    }
}

function getCommentsTTSController()
{
    try {
        $section_id = $_GET['section_id'] ?? null;
        $game_id = $_GET['game_id'] ?? null;

        if ($game_id) {
            $comments = getCommentsByGameTTS($game_id);
        } else if ($section_id) {
            $comments = getCommentsBySectionTTS($section_id);
        } else {
            $comments = getCommentsTTS();
        }

        respond(200, [
            "comments" => $comments,
            "message" => "Comments retrieved successfully."
        ]);
    } catch (Exception $e) {
        respond(500, ['message' => $e->getMessage()]);
    }
}
