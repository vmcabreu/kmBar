<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOIngresos
{
    public static function listarIngresos(): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM ingresos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}
