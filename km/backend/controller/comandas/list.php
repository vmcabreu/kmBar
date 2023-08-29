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
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        if (isset($_GET['id'])  && (isset($_GET['listType']) && $_GET['listType'] == "food")) {
            $id = intval($_GET['id']);
            $listaPedido = DAOComanda::realizarResumenComandaComida($id);
            if ($listaPedido != null) {
                http_response_code(200);
                echo json_encode($listaPedido, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Error "));
            }
        } else if (isset($_GET['id'])  && (isset($_GET['listType']) && $_GET['listType'] == "drink")) {
            $id = intval($_GET['id']);
            $listaPedido = DAOComanda::realizarResumenComandaBebidas($id);
            if ($listaPedido != null) {
                http_response_code(200);
                echo json_encode($listaPedido, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la comida con la categoría "));
            }
        } else if (isset($_GET['fecha'])  && isset($_GET['payment'])) {
            $fecha = $_GET['fecha'];
            $tipo_pago = $_GET['payment'];
            $total = DAOComanda::listaTotalComandaByPago($fecha,$tipo_pago);
            if ($total != null) {
                http_response_code(200);
                echo json_encode($total, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "Error en DB"));
            }
        }else {
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
