import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesas } from '../model/mesas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  getMesas(): Observable<Mesas[]> {
    return this.http.get<Mesas[]>(this.url + 'mesas/list.php');
  }

  getComandaFromMesa(id: number) {
    return this.http.get<Mesas[]>(this.url + 'mesas/comanda.php?id=' + id);
  }

  addComandaToMesa(mesa: Mesas): Observable<any> {
    return this.http.put(this.url + 'mesas/newComanda.php', mesa);
  }

  limpiarMesa(id: number): Observable<any> {
    return this.http.put(this.url + 'mesas/clean.php', { mesaid: id });
  }

}
