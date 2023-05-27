<?php
require_once(__DIR__ . "/../inc/bootstrap.php");

use Firebase\JWT\JWT;

class Token
{
    public static function loginJWT(Usuario $usuario)
    {
        $token = self::generarTokenLog($usuario);
        $usuario->token = $token;
        self::addTokenUsuario($usuario);
    }


    public static function generarTokenLog(Usuario $usuario): string
    {
        $payload = array(
            "iss" => "http://contentkingdom.alu6618.arkania.es/api/controller/login/loginv2.php",
            "aud" => "http://contentkingdom.alu6618.arkania.es/login",
            "iat" => time(),
            "id" => $usuario->id,
            "nombre" => $usuario->usuario,
            "email" => $usuario->email
        );
        return JWT::encode($payload, AUTHKEY, "HS256");
    }

    public static function verifyToken($jwt)
    {
        try {
            $token = JWT::decode($jwt, AUTHKEY, 'HS256');
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public static function addTokenUsuario(Usuario $usuario)
    {
        $sql = "UPDATE usuarios SET token = '$usuario->token' WHERE id = $usuario->id";
        return BaseDAO::consulta($sql);
    }

    public static function getTokenUsuario(int $id)
    {
        $sql = "SELECT token FROM usuarios WHERE id = $id LIMIT 1";
        $stmt = BaseDAO::consulta($sql);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return  $result['token'];
    }
}
