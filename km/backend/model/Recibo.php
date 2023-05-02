<?php

class Recibo
{
    private $atributos = ['nombre' => "", 'precio' => 0, 'cantidad' => 0, 'total' => 0];


    public function __construct(string $nombre = "", int $precio = 0, int $cantidad = 0, int $total = 0)
    {
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
        $this->total = $total;
    }


    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }


    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }


    public static function crearBebida(array $datos): Recibo
    {

        $bebida = new Recibo();
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
