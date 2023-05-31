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
  url: String = "https://kmbar.me/api/controller/";

  getComandas(): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url + 'comandas/list.php');
  }

  getResumenComanda(id: number): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url + 'comandas/list.php?id=' + id);
  }

  nuevaComanda(): Observable<any> {
    return this.http.post(this.url + 'comandas/add.php?type=new', null);
  }

  finalizarComanda(mesaid: number, total: number): Observable<any> {
    return this.http.post(this.url + 'comandas/add.php?type=done', { id: mesaid, total: total });
  }
}
