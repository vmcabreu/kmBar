export class Usuario {
  public id: number;
  public usuario: string;
  public passwd: string;
  public email: string;

  constructor(id: number= 0, usuario: string =  "",passwd: string =  "",  email: string = "") {
    this.id = id;
    this.usuario = usuario;
    this.passwd = passwd;
    this.email = email;
  }
}
