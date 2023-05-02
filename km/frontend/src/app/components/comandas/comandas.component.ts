import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comanda } from 'src/app/model/comanda.model';
import { ComandasService } from 'src/app/service/comandas.service';

@Component({
  selector: 'app-comandas',
  templateUrl: './comandas.component.html',
  styleUrls: ['./comandas.component.css']
})
export class ComandasComponent {
  constructor(private comandaService: ComandasService, private router: Router) { }

  listaComanda: Comanda[] = [];
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

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

}
