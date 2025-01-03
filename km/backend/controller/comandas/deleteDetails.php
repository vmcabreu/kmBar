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
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        if (isset($_GET['id'])) {
            $id = intval($_GET['id']);
            $respuestaDelete = DAOComandaDetalles::borrarDetalleComanda($id);
            http_response_code($respuestaDelete > 0 ? 200 : 422);
            echo json_encode(array("respuesta" => $respuestaDelete),JSON_UNESCAPED_UNICODE);
            return;
        }
    }
}
