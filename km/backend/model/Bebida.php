<?php

class Bebida
{
    private $atributos = ['id' => null, 'nombre' => "", 'categoria' => "", 'precio' => 0];


    public function __construct(int $id = null, string $nombre = "", string $categoria = "", int $precio = 0)
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->categoria = $categoria;
        $this->precio = $precio;
    }


    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }


    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }


    public static function crearBebida(array $datos): Bebida
    {

        $bebida = new Bebida();
        foreach ($datos as $atributo => $valor) {
            $bebida->$atributo = $valor;
        }
        return $bebida;
    }



    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
