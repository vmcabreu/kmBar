<?php

require_once(__DIR__ . "/../inc/bootstrap.php");

class DAOComida
{
    public static function listaComida(int $limit = 10000): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comida LIMIT $limit");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public static function listaComidaPorCategoria(string $categoria): array
    {
        $stmt = BaseDAO::consulta("SELECT * FROM comida WHERE categoria = '$categoria'");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public static function aniadirComida(Comida $comida): int
    {
        $sql = "INSERT INTO comida VALUES (null,'$comida->nombre','$comida->categoria',
            '$comida->precio')";
        return BaseDAO::consulta($sql);
    }


    public static function modificarComida(Comida $comida): int
    {
        $sql = "UPDATE comida SET nombre = '$comida->nombre',categoria = '$comida->categoria',
        precio = '$comida->precio'  WHERE id = $comida->id";
        return BaseDAO::consulta($sql);
    }

    public static function borrarComida(int $id): int
    {
        $sql = "DELETE FROM comida WHERE id = '$id'";
        return BaseDAO::consulta($sql);
    }
}
