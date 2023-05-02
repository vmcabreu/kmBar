import { Comanda } from "./comanda.model";

export class Mesas {
  id: number;
  comanda_id: number;

  constructor(id: number, comanda_id: number) {
    this.id = id;
    this.comanda_id = comanda_id;
  }
}
