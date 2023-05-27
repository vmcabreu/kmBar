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
            if (trim($request->usuario) === '' || $request->passwd === '') {
                return http_response_code(400);
            }
            echo $request;
        }
    }
}
