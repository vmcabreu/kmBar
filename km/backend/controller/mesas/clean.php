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
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        if (isset($_POST['mesaid'])) {
            $id = intval($_POST['mesaid']);
            $limpiarMesa = DAOMesa::limpiarMesa($id);
            if ($limpiarMesa != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la mesa"));
            }
        }
    }
}
