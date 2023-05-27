<?php
require_once(__DIR__ . "/../inc/bootstrap.php");

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

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
        $data= array(
            "id" => $usuario->id,
            "nombre" => $usuario->usuario,
            "email" => $usuario->email
        );
        $payload = array(
            "iss" => "https://kmbar.me/api",
            "aud" => "https://kmbar.me",
            "iat" => time(),
            "exp" => time() + 604800,
            "data" => $data
        );
        return JWT::encode($payload, AUTHKEY, "HS256");
    }

    public static function verifyToken($jwt)
    {
        try {
            $token = JWT::decode($jwt, new Key(AUTHKEY, 'HS256'));
            return $token->data;
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
