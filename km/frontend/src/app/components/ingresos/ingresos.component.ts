import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Comanda } from 'src/app/model/comanda.model';
import { Ingresos } from 'src/app/model/ingresos.model';
import { ComandasService } from 'src/app/service/comandas.service';
import { IngresosService } from 'src/app/service/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  listaIngresos: Ingresos[] = [];

  constructor(private router: Router, private ingresosService: IngresosService, private comandaService: ComandasService) { }

  ngOnInit() {
    this.getIngresos()
  }

  getIngresos() {
    this.ingresosService.getIngresos().subscribe({
      next: (result: Ingresos[]) => {
        this.listaIngresos = result;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  endJornada() {
    this.comandaService.getComandas().subscribe({
      next: (comandas: any[]) => {
        let total = 0;
        let fechaActual = this.getFechaActual();
        comandas.forEach(element => {
          if (element.fecha == fechaActual) {
            total += element.total
          }
        });
        if (!this.checkFecha) {
          this.ingresosService.terminarJornada(total).subscribe({
            next: () => {
              this.getIngresos()
            },
            error: (err: any) => {
              console.log(err);

            }
          })
        } else {
          this.ingresosService.updateJornada(total).subscribe({
            next: () => {
              this.getIngresos()
            },
            error: (err: any) => {
              console.log(err);

            }
          })
        }
      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

  getFechaActual() {
    const fechaActual = new Date();
    const anio = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const mesStr = mes < 10 ? `0${mes}` : `${mes}`;
    const diaStr = dia < 10 ? `0${dia}` : `${dia}`;
    return `${anio}-${mesStr}-${diaStr}`;
  }

  checkFecha(): any {
    let fechaActual = this.getFechaActual();
    return this.listaIngresos.find(ingreso => ingreso.fecha === fechaActual);
  }

}
