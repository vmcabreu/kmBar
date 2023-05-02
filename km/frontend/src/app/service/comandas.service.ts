import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../model/comida.model';
import { Comanda } from '../model/comanda.model';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  constructor(private http: HttpClient) { }
  url: String = "http://kmbar.alu6618.arkania.es/api/controller/";

  getComandas():Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url+'comanda/list.php');
  }
  getResumenComanda(id:number):Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url+'comanda/list.php?id='+id);
  }
}
