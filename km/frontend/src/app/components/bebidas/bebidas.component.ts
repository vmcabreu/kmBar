import { Component } from '@angular/core';
import { Bebida } from 'src/app/model/bebida.model';
import { BebidasService } from 'src/app/service/bebidas.service';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.css']
})
export class BebidasComponent {
 listaBebidas: Bebida[] = [];

 constructor(private bebidaService: BebidasService){}


 ngOnInit(){
  this.getListaBebidas();
}

 getListaBebidas():void{
  this.bebidaService.getBebidas().subscribe(
    (data: Bebida[]) => {
      this.listaBebidas = data;
    }
  );
}



}
