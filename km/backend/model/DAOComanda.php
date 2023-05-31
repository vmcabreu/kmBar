<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOComanda
{
    public static function listaComanda(int $limit = 10000): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comanda LIMIT $limit");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function listaComandaById(int $id): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comanda WHERE id = $id");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function realizarResumenComanda(int $id)
    {
        $stmt = BaseDAO::consulta("SELECT comida.nombre, comida.precio, comanda_detalle.cantidad, comida.precio * comanda_detalle.cantidad AS total
        FROM comanda_detalle
        JOIN comida ON comanda_detalle.comida_id = comida.id
        WHERE comanda_detalle.comanda_id = $id;
        ");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function nuevaComanda(): int
    {
        $fechaActual = date('Y-m-d');
        $sql = "INSERT INTO comanda VALUES (null,'$fechaActual','0')";
        return BaseDAO::consulta($sql);
    }

    public static function finalizarComanda(int $mesaid, float $total)
    {
        $sql = "UPDATE comanda
                SET total = $total
                WHERE id = (SELECT comanda_id FROM (SELECT comanda_id FROM mesas WHERE id = $mesaid) AS temp);
    
                UPDATE mesas
                SET comanda_id = NULL
                WHERE comanda_id = (SELECT comanda_id FROM mesas WHERE id = $mesaid) AND $total <> 0;
                ";
        
        return BaseDAO::consulta($sql);
    }
    



    public static function modificarComanda(Comanda $comanda): int
    {
        $sql = "UPDATE comanda SET fecha = '$comanda->fecha',total = '$comanda->total' WHERE id = $comanda->id";
        return BaseDAO::consulta($sql);
    }

    public static function borrarComanda(int $id): int
    {
        $sql = "DELETE FROM comanda WHERE id = '$id'";
        return BaseDAO::consulta($sql);
    }
}
