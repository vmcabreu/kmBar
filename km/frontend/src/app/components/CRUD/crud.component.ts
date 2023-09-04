import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bebida } from 'src/app/model/bebida.model';
import { Comida } from 'src/app/model/comida.model';
import { BebidasService } from 'src/app/service/bebidas.service';
import { ComidaService } from 'src/app/service/comida.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  editarSeleccionado: string = "Comida";
  elementoSeleccionado: Bebida | Comida = new Comida()
  comidaEditada: Comida = new Comida();
  bebidaEditada: Bebida = new Bebida();
  listaComida: Comida[] = [];
  listaBebidas: Bebida[] = [];
  categorias = [];
  categoriasComida = ["Para picar", "Bocadillos", "Hamburguesa", "Chucheria", "Extra", "Especial"];
  categoriasBebida = ["Café", "Té", "Bebidas alcohólicas", "Cervezas", "Refrescos", "Vinos"];

  constructor(private bebidaService: BebidasService, private comidaService: ComidaService, private router: Router) { }





  ngOnInit() {
    this.getListaBebidas();
    this.getListaComidas();
  }

  checkItemType(item: any) {
    this.elementoSeleccionado = item;
    if (this.editarSeleccionado == "Comida") {
      this.categorias = this.categoriasComida
      this.comidaEditada = item;
    } else if (this.editarSeleccionado == "Bebida") {
      this.categorias = this.categoriasBebida;
      this.bebidaEditada = item;
    }
  }

  getListaComidas(): void {
    this.comidaService.getComida().subscribe(
      (data: Comida[]) => {
        this.listaComida = data;
      }
    );
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
}
