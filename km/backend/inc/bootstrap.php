<?php
define("PROJECT_ROOT_PATH", __DIR__ . "/../");
require_once PROJECT_ROOT_PATH . "/inc/config.php";
require_once PROJECT_ROOT_PATH . "/inc/cors.php";
require_once PROJECT_ROOT_PATH . "/model/Token.php";
require_once PROJECT_ROOT_PATH . "/model/BaseDAO.php";
require_once PROJECT_ROOT_PATH . "/model/Bebida.php";
require_once PROJECT_ROOT_PATH . "/model/Comida.php";
require_once PROJECT_ROOT_PATH . "/model/Comanda.php";
require_once PROJECT_ROOT_PATH . "/model/ComandaDetalles.php";
require_once PROJECT_ROOT_PATH . "/model/Recibo.php";
require_once PROJECT_ROOT_PATH . "/model/Mesa.php";
require_once PROJECT_ROOT_PATH . "/model/DAOBebida.php";
require_once PROJECT_ROOT_PATH . "/model/DAOComida.php";
require_once PROJECT_ROOT_PATH . "/model/DAOComanda.php";
require_once PROJECT_ROOT_PATH . "/model/DAOComandaDetalles.php";
require_once PROJECT_ROOT_PATH . "/model/DAOMesa.php";