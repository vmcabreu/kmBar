export class Ingresos {
  id: number;
  fecha: string;
  ingreso: number;

  constructor(id: number=0, fecha: string="", categoria: string="", ingreso: number=0) {
    this.id = id;
    this.fecha = fecha;
    this.ingreso = ingreso;
  }
}
