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
        $request = json_decode($postdata, true);
        $ingresos = doubleval($request['total']);
        $jornadaEnd = DAOIngresos::terminarJornada($ingresos);
        if ($jornadaEnd != null) {
            http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "Los ingresos no se han podido realizar"));
        }
    }else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata, true);
        $ingresos = doubleval($request['total']);
        $updateJornada = DAOIngresos::modificarJornada($ingresos);
        if ($updateJornada != 0) {
            http_response_code(200);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "La modificacion de ingresos no se ha podido realizar"));
        }
    }
}
