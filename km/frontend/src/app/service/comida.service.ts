import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../model/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  getComida():Observable<Comida[]> {
    return this.http.get<Comida[]>(this.url+'comida/list.php');
  }

  getComidaCategoria(categoria: string):Observable<Comida[]> {
    const params: HttpParams = new HttpParams().set('categoria',categoria)
    return this.http.get<Comida[]>(this.url+'comida/list.php',{params:params});
  }

  editarComida(comida:Comida){
    return this.http.put(this.url+'comida/create.php', comida);
  }

  borrarComida(id: number){
    return this.http.delete(this.url+'comida/delete.php?id='+id);
  }
}
