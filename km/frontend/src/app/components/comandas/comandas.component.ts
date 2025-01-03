import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bebida } from 'src/app/model/bebida.model';
import { Comanda } from 'src/app/model/comanda.model';
import { ComandaDetalles } from 'src/app/model/comandadetalles.model';
import { Comida } from 'src/app/model/comida.model';
import { BebidasService } from 'src/app/service/bebidas.service';
import { ComandasService } from 'src/app/service/comandas.service';
import { ComidaService } from 'src/app/service/comida.service';
import { MesasService } from 'src/app/service/mesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent {
  constructor(private comandaService: ComandasService, private mesaService: MesasService, private bebidasService: BebidasService, private comidaService: ComidaService, private router: Router) { }

  idComanda: number;
  listaComanda: Comanda[] = [];
  listaComandaBebida: Comanda[] = [];
  listaAlimentos: Comida[] = [];
  listaBebidas: Bebida[] = [];
  listaCategoriasComida: string[] = [];
  listaCategoriasBebida: string[] = [];
  selectedType: string = "";
  selectedCategoria: string = "";
  cantidadComida: number = 0;
  cantidadBebida: number = 0;
  selectedAlimento: Comida = new Comida();
  selectedBebida: Bebida = new Bebida();
  mesaid: number = parseInt(this.router.url.split("/").splice(1, 2)[1]);
  mesa: string = this.firstToUpperCase(this.router.url.split("/").splice(1, 2)[0].slice(0, -1)) + " " + this.router.url.split("/").splice(1, 2)[1]
  tipoPago: string = "";

  ngOnInit() {
    this.mesaService.getComandaFromMesa(this.mesaid).subscribe({
      next: (result: any) => {
        if (result.comanda_id != null) {
          this.idComanda = result.comanda_id;
          this.getListaComandaResumenBebida(result.comanda_id);
          this.getListaComandaResumenComida(result.comanda_id);
          this.getBebidas();
          this.getComidas();
        }
      }
    })
  }

  getBebidas() {
    this.bebidasService.getBebidas().subscribe({
      next: (bebidas: Bebida[]) => {
        this.listaBebidas = bebidas;
        this.setCategoriasBebida();
      }
    })
  }

  getComidas() {
    this.comidaService.getComida().subscribe({
      next: (comida: Comida[]) => {
        this.listaAlimentos = comida;
        this.setCategoriasComida()

      }
    })
  }

  setCategoriasComida() {
    const categoriasUnicas = new Set(this.listaAlimentos.map(alimento => alimento.categoria));
    this.listaCategoriasComida = Array.from(categoriasUnicas);
  }
  
  setCategoriasBebida() {
    const categoriasUnicas = new Set(this.listaBebidas.map(bebida => bebida.categoria));
    this.listaCategoriasBebida = Array.from(categoriasUnicas);
  }

  getListaComandaResumenComida(id: number): void {
    this.comandaService.getResumenComandaComida(id).subscribe(
      (data: Comanda[]) => {
        this.listaComanda = data;
      }
    );
  }

  getListaComandaResumenBebida(id: number): void {
    this.comandaService.getResumenComandaBebida(id).subscribe(
      (data: Comanda[]) => {
        this.listaComandaBebida = data;
      }
    );
  }

  filtrarAlimento(){
    return this.listaAlimentos.filter(comida => comida.categoria === this.selectedCategoria)
  }

  filtrarBebida(){
    return this.listaBebidas.filter(bebida => bebida.categoria === this.selectedCategoria)
  }

  getTotal() {
    let total: number = 0;
    this.listaComanda.forEach(element => {
      total += element.total
    });
    this.listaComandaBebida.forEach(element => {
      total += element.total
    });
    return total;
  }

  addProducto() {
    if (this.selectedType == "Comida") {
      if (this.cantidadComida == 0) {
        this.cantidadComida = 1
      }
      let newProducto: ComandaDetalles = new ComandaDetalles(0, this.idComanda, this.selectedAlimento.id, 0, this.cantidadComida)
      this.comandaService.addComandaDetalle(newProducto).subscribe({
        next: () => {
          this.getListaComandaResumenComida(this.idComanda);
          this.selectedType = "";
        }
      })
    } else {
      if (this.cantidadBebida == 0) {
        this.cantidadBebida = 1
      }
      let newProducto: ComandaDetalles = new ComandaDetalles(0, this.idComanda, 0, this.selectedBebida.id, this.cantidadBebida)
      this.comandaService.addComandaDetalle(newProducto).subscribe({
        next: () => {
          this.getListaComandaResumenBebida(this.idComanda);
          this.selectedCategoria = "";
        }
      })
    }
  }

  eliminarProducto(id: number) {
    Swal.fire({
      title: '¿Quieres eliminar este producto de la comanda?',
      icon: 'warning',
      timerProgressBar: true,
      background: '#151515',
      color: '#fff',
      confirmButtonText: 'Terminar',
      confirmButtonColor: '#47ff6f',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff4747'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comandaService.eliminarProductoLista(id).subscribe({
          next: () => {
            this.eliminarProductoComanda(id);
            this.getListaComandaResumenComida(this.idComanda)
          },
          error: () => {
          }
        })
      }
    });
  }

  eliminarProductoBebida(id: number) {
    Swal.fire({
      title: '¿Quieres eliminar este producto de la comanda?',
      icon: 'warning',
      timerProgressBar: true,
      background: '#151515',
      color: '#fff',
      confirmButtonText: 'Terminar',
      confirmButtonColor: '#47ff6f',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff4747'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comandaService.eliminarProductoLista(id).subscribe({
          next: () => {
            this.getListaComandaResumenBebida(this.idComanda)
            this.eliminarProductoComanda(id);
          },
          error: () => {
          }
        })
      }
    });
  }

  terminarComanda() {
    Swal.fire({
      title: '¿Quieres terminar la comanda?',
      icon: 'info',
      timerProgressBar: true,
      background: '#151515',
      color: '#fff',
      confirmButtonText: 'Terminar',
      confirmButtonColor: '#47ff6f',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#ff4747'
    }).then((result) => {
      if (result.isConfirmed) {
        this.comandaService.finalizarComanda(this.mesaid, this.getTotal(), this.tipoPago).subscribe({
          next: () => {
            Swal.fire({
              title: '¡Comanda terminada!',
              icon: 'success',
              timerProgressBar: true,
              background: '#151515',
              color: '#fff',
              confirmButtonColor: '#47ff6f',
            }).then(() => {
              this.mesaService.limpiarMesa(this.mesaid).subscribe({
                next: () => {
                  this.router.navigateByUrl("/mesas");
                }
              })
            });
          },
          error: (error) => {
            console.error(error);
            Swal.fire({
              title: '¡Tienes que añadir productos para terminar la comanda!',
              icon: 'error',
              timerProgressBar: true,
              background: '#151515',
              color: '#fff',
              confirmButtonColor: '#47ff6f',
            });

          }
        })
      }
    });

  }

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

  eliminarProductoComanda(id: number) {
    const index = this.listaComanda.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.listaComanda.splice(index, 1);
    }
  }

  eliminarProductoComandaBebida(id: number) {
    const index = this.listaComandaBebida.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.listaComandaBebida.splice(index, 1);
    }
  }

  addTipoPago(tipoPago: string) {
    this.tipoPago = tipoPago;
  }

}
