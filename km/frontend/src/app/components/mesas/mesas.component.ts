import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mesas } from 'src/app/model/mesas.model';
import { MesasService } from 'src/app/service/mesas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent {
  constructor(private mesaService: MesasService, private router: Router) { }

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
}
