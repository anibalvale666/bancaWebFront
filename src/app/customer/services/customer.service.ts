import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //url usado por Dieogo desde el enviroment
  private _urlapi: string = environment.baseUrlApi;
  //url api creado con php hosting
  private _urlapiphp: string = "https://pruebaapi2.000webhostapp.com/api/banca.php?";
  //api local
  private _urlapilocal: string = "http://localhost/api/v1/banca.php?";

  constructor(private http: HttpClient) { }

  //Obtener customer vista home
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>('https://625ecf573b039517f1fcb8a7.mockapi.io/Customer');
  }


}
