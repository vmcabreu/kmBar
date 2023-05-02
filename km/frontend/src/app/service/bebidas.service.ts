import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bebida } from '../model/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  constructor(private http: HttpClient) { }
  url: String = "http://kmbar.alu6618.arkania.es/api/controller/";

  getBebidas():Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.url+'bebida/list.php');
  }

  getBebidasCategoria(categoria: string):Observable<Bebida[]> {
    const params: HttpParams = new HttpParams().set('categoria',categoria)
    return this.http.get<Bebida[]>(this.url+'bebida/list.php',{params:params});
  }

}
