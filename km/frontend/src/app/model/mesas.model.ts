import { Comanda } from "./comanda.model";

export class Mesas {
  id: number;
  comanda: Comanda;

  constructor(id: number, comanda: Comanda) {
    this.id = id;
    this.comanda = comanda;
  }
}
