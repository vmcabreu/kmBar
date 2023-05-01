export class Comida {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;

  constructor(id: number, nombre: string, categoria: string, descripcion: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
