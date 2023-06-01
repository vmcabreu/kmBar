import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingresos } from '../model/ingresos.model';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  getIngresos(): Observable<Ingresos[]> {
    return this.http.get<Ingresos[]>(this.url + 'ingresos/list.php');
  }

  terminarJornada(total:number): Observable<any> {
    return this.http.post<any>(this.url + 'ingresos/add.php',{total:total});
  }
}
