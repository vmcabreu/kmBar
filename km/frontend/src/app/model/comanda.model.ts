export class Comanda {
  nombre: string;
  precio: number;
  cantidad: number;
  total: number;

  constructor(nombre: string, precio: number, cantidad: number, total: number) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.total = total;
  }
}
