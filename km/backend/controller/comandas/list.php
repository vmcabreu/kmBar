<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
$headers = apache_request_headers();
if (isset($headers['Authorization'])) {
    $bearerToken = explode(' ', $headers['Authorization']);
    $token = $bearerToken[1];
    if (Token::verifyToken($token)) {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            if (isset($_GET['id'])) {
                $id = intval($_GET['id']);
                $listaPedido = DAOComanda::realizarResumenComanda($id);
                if ($listaPedido != null) {
                    http_response_code(200);
                    echo json_encode($listaPedido, JSON_UNESCAPED_UNICODE);
                } else {
                    http_response_code(404);
                    echo json_encode(array("message" => "No se encontró la comida con la categoría  " . $categoria));
                }
            } else {
                $listaMesas = DAOComanda::listaComanda();
                if ($listaMesas != null) {
                    http_response_code(200);
                    echo json_encode($listaMesas, JSON_UNESCAPED_UNICODE);
                } else {
                    http_response_code(404);
                    echo json_encode(array("message" => "No se encontró la lista de mesas"));
                }
            }
        }
    }
}
