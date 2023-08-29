import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../model/comida.model';
import { Comanda } from '../model/comanda.model';
import { ComandaDetalles } from '../model/comandadetalles.model';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  getComandas(): Observable<any[]> {
    return this.http.get<any>(this.url + 'comandas/list.php');
  }

  getResumenComandaComida(id: number): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url + 'comandas/list.php?id=' + id + '&listType=food');
  }

  getResumenComandaBebida(id: number): Observable<Comanda[]> {
    return this.http.get<Comanda[]>(this.url + 'comandas/list.php?id=' + id + '&listType=drink');
  }

  nuevaComanda(): Observable<any> {
    return this.http.post(this.url + 'comandas/add.php?type=new', null);
  }

  finalizarComanda(mesaid: number, total: number, tipo_pago: string): Observable<any> {
    return this.http.post(this.url + 'comandas/add.php?type=done', { id: mesaid, total: total, tipo_pago:tipo_pago });
  }

  eliminarProductoLista(id:number): Observable<any>{
    return this.http.delete(`${this.url}comandas/deleteDetails.php?id=${id}`)
  }

  addComandaDetalle(comanda: ComandaDetalles): Observable<any> {
    return this.http.post(this.url + 'comandas/add.php?type=details', comanda);
  }
}
