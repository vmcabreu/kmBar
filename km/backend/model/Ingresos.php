<?php

class Ingresos
{
    private $atributos = ['id' => null, 'fecha' => null, 'ingreso' => 0];


    public function __construct(int $id = null, string $fecha = "", int $ingreso = 0)
    {
        $this->id = $id;
        $this->fecha = $fecha;
        $this->ingreso = $ingreso;
    }



    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }



    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    public static function crearIngreso(array $datos): Mesa
    {

        $comida = new Mesa();
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
