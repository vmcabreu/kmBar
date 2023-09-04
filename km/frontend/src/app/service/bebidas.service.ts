import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Bebida } from '../model/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidasService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  getBebidas():Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.url+'bebida/list.php');
  }

  getBebidasCategoria(categoria: string):Observable<Bebida[]> {
    const params: HttpParams = new HttpParams().set('categoria',categoria)
    return this.http.get<Bebida[]>(this.url+'bebida/list.php',{params:params});
  }

  editarComida(comida:Bebida){
    return this.http.put(this.url+'comida/create.php', comida);
  }

  borrarComida(id: number){
    return this.http.delete(this.url+'comida/delete.php?id='+id);
  }

}
