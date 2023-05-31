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
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata, true);
        $mesa = Mesa::crearMesa($request);
        $modificacionMesa = DAOMesa::modificarMesa($mesa);
        if ($modificacionMesa != null) {
            http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No se pudo enlazar la comanda con la mesa"));
        }
    }
}
