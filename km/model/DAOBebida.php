<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOBebida
{
    public static function listaBebida(int $limit = 20): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM bebidas LIMIT $limit");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public static function listaBebidaPorCategoria(string $categoria): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM bebidas WHERE categoria = '$categoria'");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function aniadirBebida(Bebida $bebida): int
    {
        $sql = "INSERT INTO bebidas VALUES (null,'$bebida->nombre','$bebida->categoria',
            '$bebida->precio')";
        return BaseDAO::consulta($sql);
    }


    public static function modificarBebida(Bebida $bebida): int
    {
        $sql = "UPDATE bebidas SET nombre = '$bebida->nombre',categoria = '$bebida->categoria',
        precio = '$bebida->precio'  WHERE id = $bebida->id";
        return BaseDAO::consulta($sql);
    }

    public static function borrarBebida(int $id): int
    {
        $sql = "DELETE FROM bebidas WHERE id = '$id'";
        return BaseDAO::consulta($sql);
    }
}
