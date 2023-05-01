import { HttpClient, HttpHeaders } from '@angular/common/http';
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


}
