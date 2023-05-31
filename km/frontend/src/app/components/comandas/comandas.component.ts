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
  constructor(private comandaService: ComandasService, private mesaService: MesasService,private bebidasService:BebidasService,private comidaService:ComidaService ,private router: Router) { }

  idComanda: number;
  listaComanda: Comanda[] = [];
  listaComandaBebida: Comanda[] = [];
  listaAlimentos: Comida[] = [];
  listaBebidas: Bebida[]=[];
  selectedType:string="";
  cantidadComida:number = 0;
  cantidadBebida:number = 0;
  selectedAlimento: Comida = new Comida();
  selectedBebida: Bebida = new Bebida();
  mesaid: number = parseInt(this.router.url.split("/").splice(1, 2)[1]);
  mesa: string = this.firstToUpperCase(this.router.url.split("/").splice(1, 2)[0].slice(0, -1)) + " " + this.router.url.split("/").splice(1, 2)[1]

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

  getBebidas(){
    this.bebidasService.getBebidas().subscribe({
      next:(bebidas:Bebida[])=>{
        this.listaBebidas = bebidas;
      }
    })
  }

  getComidas(){
    this.comidaService.getComida().subscribe({
      next:(comida:Comida[])=>{
        this.listaAlimentos = comida;
      }
    })
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
        console.log(data);
      }
    );
  }

  getTotal() {
    let total: number = 0;
    this.listaComanda.forEach(element => {
      total += element.total
    });
    return total;
  }

  addProducto(){
    if (this.selectedType == "Comida") {

      let newProducto: ComandaDetalles = new ComandaDetalles(0,this.idComanda,this.selectedAlimento.id,0,this.cantidadComida)
      console.log(newProducto);
      this.comandaService.addComandaDetalle(newProducto).subscribe({
        next:()=>{
          this.getListaComandaResumenComida(this.idComanda)
        }
      })
    }else{
      let newProducto: ComandaDetalles = new ComandaDetalles(0,this.idComanda,0,this.selectedBebida.id,this.cantidadBebida)
      console.log(newProducto);

      this.comandaService.addComandaDetalle(newProducto).subscribe({
        next:()=>{
          this.getListaComandaResumenBebida(this.idComanda)
        }
      })
    }
  }

  eliminarProducto(){
    
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
        this.comandaService.finalizarComanda(this.mesaid, this.getTotal()).subscribe({
          next: () => {
            Swal.fire({
              title: '¡Comanda terminada!',
              icon: 'success',
              timerProgressBar: true,
              background: '#151515',
              color: '#fff',
              confirmButtonColor: '#47ff6f',
            }).then(() => {
              this.router.navigateByUrl("/mesas");
            });
          },
          error: () => {
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

}
