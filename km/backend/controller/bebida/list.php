<?php
require_once(__DIR__ . "../../../inc/bootstrap.php");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['categoria'])) {
        $categoria = $_GET['categoria'];
        if (strpos($categoria,'_') !== false) {
            $categoria = str_replace("_"," ",$categoria);
            $listaBebidas = DAOBebida::listaBebidaPorCategoria($categoria);
            if ($listaBebidas != null) {
                echo json_encode($listaBebidas,JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
            }
        }else{
            $listaBebidas = DAOBebida::listaBebidaPorCategoria($categoria);
            if ($listaBebidas != null) {
                echo json_encode($listaBebidas,JSON_UNESCAPED_UNICODE);
            } else {
                http_response_code(404);
                echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
            }
        }

        
    }else{
        $listaBebidas = DAOBebida::listaBebida();
        if ($listaBebidas != null) {
            echo json_encode($listaBebidas,JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "No se encontró el usuario con ID " . $id));
        }
    }
}
