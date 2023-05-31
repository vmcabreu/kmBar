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
            $mesaid = intval($_POST['id']);
            $total = doubleval($_POST['total']);
            $listaPedido = DAOComanda::finalizarComanda($mesaid,$total);
            if ($listaPedido != null) {
                http_response_code(200);
                echo json_encode($listaPedido, JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró la comida con la categoría  " . $categoria));
            }
        }
    }
}
