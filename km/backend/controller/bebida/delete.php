<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
header("Access-Control-Allow-Origin: *");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (Token::verifyToken($token)) {
        if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $resultado = DAOBebida::borrarBebida($id);
                if ($resultado) {
                    http_response_code(204);
                } else {
                    return http_response_code(422);
                }
            } else {
                return http_response_code(400);
            }
        }
    }
}
