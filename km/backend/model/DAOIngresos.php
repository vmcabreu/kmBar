<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOIngresos
{
    public static function listarIngresos(): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM ingresos");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function terminarJornada(float $total)
    {
        $fechaActual = date('Y-m-d');
        $sql = "INSERT INTO ingresos (fecha, ingreso) VALUES ('$fechaActual ', $total)";
        return BaseDAO::consulta($sql);
    }

    public static function modificarJornada(float $total)
    {
        $fechaActual = date('Y-m-d');
        $sql = "UPDATE ingresos SET ingreso = $total WHERE fecha = '$fechaActual'";
        return BaseDAO::consulta($sql);
    }
}
