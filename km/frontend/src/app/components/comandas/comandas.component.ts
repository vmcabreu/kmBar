import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comanda } from 'src/app/model/comanda.model';
import { ComandasService } from 'src/app/service/comandas.service';
import { MesasService } from 'src/app/service/mesas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent {
  constructor(private comandaService: ComandasService,private mesaService: MesasService ,private router: Router) { }

  listaComanda: Comanda[] = [];
  listaComandaBebida: Comanda[] = [];
  mesaid: number = parseInt(this.router.url.split("/").splice(1, 2)[1]);
  mesa: string = this.firstToUpperCase(this.router.url.split("/").splice(1, 2)[0].slice(0, -1)) + " " + this.router.url.split("/").splice(1, 2)[1]

  ngOnInit() {
    this.getListaComandaResumenComida();
    this.getListaComandaResumenBebida();
  }

  getListaComandaResumenComida(): void {
    let ruta: string[] = this.router.url.split("/").splice(1, 2);
    this.comandaService.getResumenComandaComida(parseInt(ruta[1])).subscribe(
      (data: Comanda[]) => {
        this.listaComanda = data;
      }
    );
  }

  getListaComandaResumenBebida(): void {
    let ruta: string[] = this.router.url.split("/").splice(1, 2);
    this.comandaService.getResumenComandaBebida(parseInt(ruta[1])).subscribe(
      (data: Comanda[]) => {
        this.listaComandaBebida = data;
      }
    );
  }

  getTotal(){
    let total:number = 0;
    this.listaComanda.forEach(element => {
      total += element.total
    });
    return total;
  }

  terminarComanda(){
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
        this.comandaService.finalizarComanda(this.mesaid,this.getTotal()).subscribe({
          next:()=>{
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
          error:()=>{

          }
        })
      }
    });

  }

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

}
