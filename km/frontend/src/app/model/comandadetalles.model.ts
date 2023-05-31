export class ComandaDetalles {
  id: number;
  comanda_id: number;
  comida_id: number;
  bebida_id:number;
  cantidad: number;

  constructor(id: number, comanda_id: number, comida_id: number,bebida_id:number, cantidad: number) {
    this.id = id;
    this.comanda_id = comanda_id;
    this.comida_id = comida_id;
    this.bebida_id = bebida_id;
    this.cantidad = cantidad;
  }
}
