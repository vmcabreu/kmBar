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
  mesaid: number = parseInt(this.router.url.split("/").splice(1, 2)[1]);
  mesa: string = this.firstToUpperCase(this.router.url.split("/").splice(1, 2)[0].slice(0, -1)) + " " + this.router.url.split("/").splice(1, 2)[1]

  ngOnInit() {
    this.getListaComandaResumen();
  }

  getListaComandaResumen(): void {
    let ruta: string[] = this.router.url.split("/").splice(1, 2);
    this.comandaService.getResumenComanda(parseInt(ruta[1])).subscribe(
      (data: Comanda[]) => {
        this.listaComanda = data;
      }
    );
  }

  terminarComanda(){
    this.comandaService.finalizarComanda(this.mesaid).subscribe({
      next:()=>{
        Swal.fire({
          title: '¡Comanda terinada!',
          icon: 'success',
          timerProgressBar: true,
          background: '#151515',
          color: '#fff'
        }).then((result) => {
          this.mesaService.limpiarMesa(this.mesaid).subscribe({
            next:()=>{
              this.router.navigateByUrl("/mesas");
            },
            error:()=>{

            }
          })
        });
      },
      error:()=>{

      }
    })
  }

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

}
