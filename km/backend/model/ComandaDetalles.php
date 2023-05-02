<?php

class ComandaDetalles
{
    private $atributos = ['id' => null, 'comanda_id' => 0, 'comida_id' => 0, 'cantidad' => 0];


    public function __construct(int $id = null, int $comanda_id = 0, int $comida_id = 0,int $cantidad=0)
    {
        $this->id = $id;    
        $this->comanda_id = $comanda_id;
        $this->comida_id = $comida_id;
        $this->cantidad = $cantidad;
    }



    public function __set(string $atributo, mixed $valor)
    {
        $this->atributos[$atributo] = $valor;
    }



    public function __get(string $atributo)
    {
        return $this->atributos[$atributo];
    }

    public static function crearComida(array $datos): ComandaDetalles
    {

        $comida = new ComandaDetalles();
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
