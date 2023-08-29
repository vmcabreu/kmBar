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
  listaIngresosTarjeta: any[] = [];
  listaIngresosEfectivo: any[] = [];

  constructor(private router: Router, private ingresosService: IngresosService, private comandaService: ComandasService) { }

  ngOnInit() {
    this.getIngresos();

  }

  getIngresos() {
    this.ingresosService.getIngresos().subscribe({
      next: (result: Ingresos[]) => {
        this.listaIngresos = result;
        this.getIngresosByFechaEfectivo(this.listaIngresos);
        this.getIngresosByFechaTarjeta(this.listaIngresos);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  getIngresosByFechaEfectivo(listaIngresos: Ingresos[]) {
    let listaIngresosEfectivo: any[] = [];
    listaIngresos.forEach(element => {
      this.comandaService.getResumenTotalTipoDePago(element?.fecha, 'Efectivo').subscribe({
        next(value) {
          listaIngresosEfectivo.push({ fecha: element?.fecha, total: value?.total_sum });
        },
        error(err) {
          console.error(err);
        },
      })

    });
    this.listaIngresosEfectivo = listaIngresosEfectivo
  }

  getIngresosByFechaTarjeta(listaIngresos: Ingresos[]) {
    let listaIngresosTarjeta: any[] = [];
    listaIngresos.forEach(element => {
      this.comandaService.getResumenTotalTipoDePago(element?.fecha, 'Tarjeta').subscribe({
        next(value:any) {
          listaIngresosTarjeta.push({ fecha: element?.fecha, total: value?.total_sum });
        },
        error(err) {
          console.error(err);
        },
      })
    });
    this.listaIngresosTarjeta = listaIngresosTarjeta;
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
        if (this.checkFecha) {
          this.ingresosService.terminarJornada(total).subscribe({
            next: () => {
              this.getIngresos()
            },
            error: (err: any) => {
              console.log(err);
              this.ingresosService.updateJornada(total).subscribe({
                next: () => {
                  this.getIngresos()
                },
                error: (err: any) => {
                  console.log(err);

                }
              })

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
  getTotalByFechaEfectivo(fecha) {
    const ingreso = this.listaIngresosEfectivo.find(item => item.fecha === fecha);
    return ingreso ? ingreso.total : 0;
  }

  getTotalByFechaTarjeta(fecha) {
    const ingreso = this.listaIngresosTarjeta.find(item => item.fecha === fecha);
    return ingreso ? ingreso.total : 0;
  }

  checkFecha(): any {
    let fechaActual = this.getFechaActual();
    return this.listaIngresos.find(ingreso => ingreso.fecha === fechaActual);
  }

}
