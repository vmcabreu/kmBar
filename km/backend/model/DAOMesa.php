<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOMesa
{
    public static function listaMesas(): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM mesas ORDER BY id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }



    public static function aniadirMesa(Mesa $mesa): int
    {
        $sql = "INSERT INTO mesas (id, comanda_id) VALUES ($mesa->id,'$mesa->comanda_id')";
        return BaseDAO::consulta($sql);
    }


    public static function modificarMesa(Mesa $mesa): int
    {
        $sql = "UPDATE mesas SET comanda_id = '$mesa->comanda_id' WHERE id = $mesa->id";
        return BaseDAO::consulta($sql);
    }

    public static function getComandaFromMesa(int $id): array
    {
        $stmt = BaseDAO::consulta("SELECT comanda_id FROM mesas WHERE id=$id");
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }


    public static function limpiarMesa(int $id): int
    {
        $sql = "UPDATE mesas SET comanda_id = NULL WHERE id = $id";
        return BaseDAO::consulta($sql);
    }
}
