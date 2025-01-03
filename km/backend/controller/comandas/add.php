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
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_GET['type']) && $_GET['type'] == "new") {
            $newComanda = DAOComanda::nuevaComanda();
            if ($newComanda != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se puede añadir una nueva comanda"));
            }
        } else if (isset($_GET['type']) && $_GET['type'] == "done") {
            $postdata = file_get_contents("php://input");
            $request = json_decode($postdata,true);
            $mesaid = intval($request['id']);
            $total = doubleval($request['total']);
            $tipo_pago = $request['tipo_pago'];
            $listaPedido = DAOComanda::finalizarComanda($mesaid,$tipo_pago,$total);
            if ($listaPedido != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la comida con la categoría  " . $listaPedido));
            }
        }else if (isset($_GET['type']) && $_GET['type'] == "details") {
            $postdata = file_get_contents("php://input");
            $request = json_decode($postdata,true);
            $comandaDetalle = ComandaDetalles::crearDetallesComanda($request);
            $listaPedido = DAOComandaDetalles::aniadirDetalleComanda($comandaDetalle);
            if ($listaPedido != null) {
                http_response_code(200);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Error  " . $listaPedido));
            }
        }
    }
}
