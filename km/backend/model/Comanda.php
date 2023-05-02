<?php

class Comanda
{
    private $atributos = ['id' => null, 'fecha' => "", 'total' => 0];


    public function __construct(int $id = null, string $fecha = "", int $total = 0)
    {
        $this->id = $id;
        $this->fecha = $fecha;
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

    public static function crearComida(array $datos): Comanda
    {

        $comida = new Comanda();
        foreach ($datos as $atributo => $valor) {
            $comida->$atributo = $valor;
        }
        return $comida;
    }



    public function __toString()
    {
        return json_encode($this->atributos, JSON_UNESCAPED_UNICODE);
    }
}
