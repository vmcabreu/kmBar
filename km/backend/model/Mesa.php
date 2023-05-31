<?php

class Mesa
{
    private $atributos = ['id' => null, 'comanda_id' => 0];


    public function __construct(int $id = null, int $comanda_id = 0)
    {
        $this->id = $id;
        $this->comanda_id = $comanda_id;
    }



    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }



    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    public static function crearMesa(array $datos): Mesa
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
