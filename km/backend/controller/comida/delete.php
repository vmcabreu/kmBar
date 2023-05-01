<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
header("Access-Control-Allow-Origin: *");
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    if (isset($_GET['id'])) {
        $id = intval($_GET['id']);
        $resultado = DAOComida::borrarComida($id);
        if ($resultado) {
            http_response_code(204);
        } else {
            return http_response_code(422);
        }
    } else {
        return http_response_code(400);
    }
}
