<?php

/* Es una clase que representa a un usuario. */
class Usuario
{
    private $atributos = ['id' => null, 'usuario' => "", 'passwd' => "", 'email' => ""];

    public function __construct(int $id = null, string $usuario = "", string $passwd = "", string $email = "")
    {
        $this->id = $id;
        $this->usuario = $usuario;
        $this->passwd = $passwd;
        $this->email = $email;
    }


    /**
     * Toma dos argumentos, una cadena y un valor mixto, y establece el valor del atributo con el nombre
     * dado al valor dado
     * @param {string} atributo - El nombre del atributo que desea establecer.
     * @param {mixed} valor - El valor para establecer el atributo.
     */
    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }


    /**
     * Devuelve el valor del atributo que se pasa como parámetro
     * @param {string} atributo - El nombre del atributo que desea obtener.
     * @returns El valor del atributo.
     */
    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    /**
     * Toma una matriz de datos y devuelve un nuevo objeto Usuario.
     * @param {array} datosUsuario - una matriz con las siguientes claves:
     * @returns Una nueva instancia de la clase Usuario.
     */

    public static function crearUsuario(array $datosUsuario): Usuario
    {

        $usuario = new Usuario();
        foreach ($datosUsuario as $atributo => $valor) {
            if ($atributo == "passwd") {
                $usuario->$atributo = password_hash($valor,PASSWORD_DEFAULT);
            }else{
                $usuario->$atributo = $valor;
            }
            
        }
        return $usuario;
    }

    /**
     * Devuelve una representación JSON de los atributos del objeto.
     * @returns La representación JSON del objeto.
     */
    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
