import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bebida } from 'src/app/model/bebida.model';
import { BebidasService } from 'src/app/service/bebidas.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
  listaBebidas: Bebida[] = [];

  constructor(private bebidaService: BebidasService, private router: Router) { }


  ngOnInit() {
    this.getListaByRuta();
  }


  getListaByRuta() {
    let ruta: string[] = this.router.url.split("/").splice(1, 2);
    if (ruta.length > 1) {
      this.getListaBebidaCategoria(ruta[1]);
    } else {
      this.getListaBebidas()
    }
  }

  getListaBebidas(): void {
    this.bebidaService.getBebidas().subscribe({
      next: (data: Bebida[]) => {
        console.log(data);
        this.listaBebidas = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    }
    );
  }

  getListaBebidaCategoria(categoria: string): void {
    console.log(categoria);
    this.bebidaService.getBebidasCategoria(this.firstToUpperCase(categoria)).subscribe(
      (data: Bebida[]) => {
        this.listaBebidas = data;
      }
    );
  }

  firstToUpperCase(str: string) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }


}
