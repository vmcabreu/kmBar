import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mesas } from 'src/app/model/mesas.model';
import { ComandasService } from 'src/app/service/comandas.service';
import { MesasService } from 'src/app/service/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  constructor(private mesaService: MesasService,private comandaService: ComandasService ,private router: Router) { }

  listaMesas: Mesas[] = [];

  ngOnInit(){
    this.getListaMesas();
  }

  getListaMesas(): void {
    this.mesaService.getMesas().subscribe(
      (data: Mesas[]) => {
        this.listaMesas = data;
      }
    );
  }

  newComanda(mesa:Mesas){
    this.comandaService.nuevaComanda().subscribe({
      next:()=>{
        this.mesaService.getComandaFromMesa(mesa.id).subscribe({
          next:(comanda:any)=>{
            mesa.comanda_id = comanda.comanda_id
            this.mesaService.addComandaToMesa(mesa).subscribe()
          }
        })

      }
    })
  }

  checkVentana(number:number){
    if (number == 11) {
      return "Izquierda"
    }else{
      return "Derecha"
    }
  }
}
