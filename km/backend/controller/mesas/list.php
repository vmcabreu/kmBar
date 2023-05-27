<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (Token::verifyToken($token)) {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            $listaMesas = DAOMesa::listaMesas();
            if ($listaMesas != null) {
                echo json_encode($listaMesas, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la lista de mesas"));
            }
        }
    }
}
