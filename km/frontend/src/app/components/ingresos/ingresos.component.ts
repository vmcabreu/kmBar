import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ingresos } from 'src/app/model/ingresos.model';
import { IngresosService } from 'src/app/service/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  listaIngresos: Ingresos[]=[];

  constructor(private router:Router,private ingresosService:IngresosService){}

  ngOnInit(){
    this.getIngresos()
  }

  getIngresos(){
    this.ingresosService.getIngresos().subscribe({
      next:(result: Ingresos[])=>{
        this.listaIngresos = result;
      },
      error:(err:any)=>{
        console.log(err);

      }
    })
  }
}