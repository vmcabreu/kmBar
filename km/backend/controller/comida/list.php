<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['categoria'])) {
        $categoria = $_GET['categoria'];
        $listaComida = DAOComida::listaComidaPorCategoria($categoria);
        if ($listaComida != null) {
            echo json_encode($listaComida,JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
        }
    }else{
        $listaComida = DAOComida::listaComida();
        if ($listaComida != null) {
            echo json_encode($listaComida,JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
        }
    }
}
