<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (!$token || !Token::verifyToken($token)) {
        http_response_code(401);
        exit(json_encode(array("message" => "Acceso denegado")));
    }
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        if (isset($_GET['categoria'])) {
            $categoria = urldecode($_GET['categoria']);
            $categoria = str_replace('_', ' ', $categoria);
            $listaBebidas = DAOBebida::listaBebidaPorCategoria($categoria);
            if ($listaBebidas != null) {
                echo json_encode($listaBebidas, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la bebida con la categoría  " . $categoria));
            }
        } else {
            $listaBebidas = DAOBebida::listaBebida();
            if ($listaBebidas != null) {
                http_response_code(200);
                echo json_encode($listaBebidas, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
            }
        }
    }
}
