<?php
//$dominioPermitido = "http://localhost:4200";
//header("Access-Control-Allow-Origin: $dominioPermitido");
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json, charset=utf-8');
header("Access-Control-Allow-Methods: OPTIONS,GET,PUT,POST,DELETE");