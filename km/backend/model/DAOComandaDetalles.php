<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOComandaDetalles
{
    public static function listaDetalleComanda(int $limit = 10000): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comanda_detalle  LIMIT $limit");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function getByComandaId(int $comanda_id): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comanda_detalle  WHERE comanda_id = $comanda_id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function aniadirDetalleComanda(ComandaDetalles $comanda): int
    {
        $comida_id = ($comanda->comida_id == 0) ? null : $comanda->comida_id;
        $bebida_id = ($comanda->bebida_id == 0) ? null : $comanda->bebida_id;
        $sql = "INSERT INTO comanda_detalle VALUES (null, '$comanda->comanda_id', $comida_id, $bebida_id, '$comanda->cantidad')";
        return BaseDAO::consulta($sql);
    }
    
    


    public static function modificarDetalleComanda(ComandaDetalles $comanda): int
    {
        $sql = "UPDATE comanda_detalle SET comanda_id = '$comanda->comanda_id',comida_id = '$comanda->comida_id',cantidad = '$comanda->cantidad' WHERE id = $comanda->id";
        return BaseDAO::consulta($sql);
    }

    public static function borrarDetalleComanda(int $id): int
    {
        $sql = "DELETE FROM comanda_detalle WHERE id = '$id'";
        return BaseDAO::consulta($sql);
    }
}
