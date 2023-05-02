import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comida } from 'src/app/model/comida.model';
import { ComidaService } from 'src/app/service/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  constructor(private comidaService: ComidaService, private router: Router) { }

  listaComida: Comida[] = [];

  ngOnInit() {
    this.getListaByRuta();
  }

  getListaByRuta() {
    let ruta: string[] = this.router.url.split("/").splice(1,2);
    if (ruta.length > 1) {
      this.getListaComidasCategoria(ruta[1]);
    } else {
      this.getListaComidas()
    }
  }

  getListaComidas(): void {
    this.comidaService.getComida().subscribe(
      (data: Comida[]) => {
        this.listaComida = data;
      }
    );
  }

  getListaComidasCategoria(categoria: string): void {
    console.log(categoria);
    this.comidaService.getComidaCategoria(this.firstToUpperCase(categoria)).subscribe(
      (data: Comida[]) => {
        this.listaComida = data;
      }
    );
  }

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }
}
