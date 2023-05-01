<?php
require_once(__DIR__ . "/../inc/config.php");
class BaseDAO
{
    private static $lastAffectedRows;
    protected $connection = null;

    /**
     * Crea una nueva conexión a la base de datos usando las credenciales definidas en el archivo
     * `config.php`
     */
    public static function getConexion(): PDO
    {
        try {
            $connection  = new PDO("mysql:host=" . DB_HOST . ";charset=utf8;dbname=" . DB_DATABASE_NAME, DB_USERNAME, DB_PASSWORD);
            // set the PDO error mode to exception
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            exit($e->getMessage());
        }
        return $connection;
    }

    /**
     * Esta función PHP ejecuta una consulta SQL y devuelve un objeto PDOStatement o un número entero
     * dependiendo de si la consulta es una declaración SELECT o no, respectivamente.
     * 
     * @param string sql La consulta SQL a ejecutar. Puede ser una instrucción SELECCIONAR, INSERTAR,
     * ACTUALIZAR o ELIMINAR.
     * 
     * @return PDOStatement|int ya sea un objeto PDOStatement o un valor entero dependiendo de si la
     * consulta SQL pasada como parámetro comienza con la palabra "SELECT" o no. Si comienza con "SELECT",
     * la función ejecuta una consulta y devuelve un objeto PDOStatement. De lo contrario, ejecuta un exec
     * y devuelve un valor entero.
     */
    public static function consulta(string $sql): PDOStatement | int
    {
        // Para evitar el error de "duplicate entry", generamos un try-catch
        try {
            //Comprobamos si la sql pasada por parametro contiene la palabra "SELECT"
            $conexion = self::getConexion();

            if (str_starts_with(strtolower(trim($sql)), "select")) {
                $resultado = $conexion->query($sql);
            } else {
                // En caso contrario, ejecutamos un exec
                $resultado = $conexion->exec($sql);
            }
            // Cerramos la conexión y devolvemos
            unset($conexion); // Cerrar la conexion
            return $resultado;
        } catch (Exception $ex) {
            // throw new Exception("Error en la consulta.");
            die("Error en la consulta. " . $ex->getMessage());
        }
    }

    /**
     * Devuelve el número de filas afectadas por la última consulta
     * 
     * @return int El número de filas afectadas por la última instrucción SQL.
     */
    public static function getLastAffectedRows()
    {
        return self::$lastAffectedRows;
    }
}
