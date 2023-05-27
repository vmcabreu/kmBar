import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Auth } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  url: String = "https://kmbar.me/api/controller/";

  loginPostUser(nombre: string, passwd: string): Observable<any>{
    return this.http.post(`${this.url}login/loginv2.php`, { nombre, passwd },{responseType : "text", observe: 'response'});
  }
  loginGetUser(username: string, passwd: string): Observable<Auth>{
    const params = new HttpParams()
    .set('username', username)
    .set('passwd', passwd);
    return this.http.get<Auth>(`${this.url}login/loginv2.php`, { params:params });
  }
}
