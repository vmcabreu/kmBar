import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comida } from '../model/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComandasService {

  constructor(private http: HttpClient) { }
  url: String = "http://kmbar.alu6618.arkania.es/api/controller/";

  getBebidas():Observable<Comida[]> {
    return this.http.get<Comida[]>(this.url+'comida/list.php');
  }
}
