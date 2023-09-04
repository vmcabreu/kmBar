export class Comida {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;

  constructor(id: number = 0, nombre: string = "", categoria: string = "", precio: number = 0) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}
