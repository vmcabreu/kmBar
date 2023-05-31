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
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);
    
        if (isset($data['mesaid'])) {
            $id = intval($data['mesaid']);
            $limpiarMesa = DAOMesa::limpiarMesa($id);
            if ($limpiarMesa > 0) {
                http_response_code(200);
                echo json_encode(array("message" => "Mesa ".$id));
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la mesa ".$id." Razon: ".$limpiarMesa));
            }
        } else {
            http_response_code(400);
            echo json_encode(array("message" => "ID de mesa no válido"));
        }
    }
    
}
