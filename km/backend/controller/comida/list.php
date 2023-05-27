<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (!$token || !Token::verifyToken($token)) {
        http_response_code(401);
        exit(json_encode(array("message" =>"Acceso denegado")));
    }
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            if (isset($_GET['categoria'])) {
                $categoria = $_GET['categoria'];
                $categoria = str_replace('_', ' ', $categoria);
                $listaComida = DAOComida::listaComidaPorCategoria($categoria);
                if ($listaComida != null) {
                    http_response_code(200);
                    echo json_encode($listaComida, JSON_UNESCAPED_UNICODE);
                } else {
                    http_response_code(404);
                    echo json_encode(array("message" => "No se encontró la comida con la categoría  " . $categoria));
                }
            } else {
                $listaComida = DAOComida::listaComida();
                if ($listaComida != null) {
                    http_response_code(200);
                    echo json_encode($listaComida, JSON_UNESCAPED_UNICODE);
                } else {
                    http_response_code(404);
                    echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
                }
            }
        }
    
}
