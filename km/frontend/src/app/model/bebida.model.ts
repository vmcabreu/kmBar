export class Bebida {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;

  constructor(id: number, nombre: string, categoria: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}
