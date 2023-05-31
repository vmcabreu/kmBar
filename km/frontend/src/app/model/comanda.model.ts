export class Comanda {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  total: number;

  constructor(id: number, nombre: string, precio: number, cantidad: number, total: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.total = total;
  }
}
