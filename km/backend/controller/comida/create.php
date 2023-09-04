<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
header("Access-Control-Allow-Origin: *");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (!$token || !Token::verifyToken($token)) {
        http_response_code(401);
        exit(json_encode(array("message" => "Acceso denegado")));
    }
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $postdata = file_get_contents("php://input");
        if (isset($postdata) && !empty($postdata)) {
            $request = json_decode($postdata);
            $resultado = DAOComida::aniadirComida($request);
            if ($resultado != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró el usuario con ID "));
            }
        }
    }
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $postdata = file_get_contents("php://input");
        if (isset($postdata) && !empty($postdata)) {
            $request = json_decode($postdata);
            $resultado = DAOComida::modificarComida($request);
            if ($resultado != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró el usuario con ID "));
            }
        }
    }
}
