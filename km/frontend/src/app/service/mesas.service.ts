import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesas } from '../model/mesas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(private http: HttpClient) { }
  url: String = "http://kmbar.alu6618.arkania.es/api/controller/";

  getMesas():Observable<Mesas[]> {
    return this.http.get<Mesas[]>(this.url+'mesas/list.php');
  }

}
