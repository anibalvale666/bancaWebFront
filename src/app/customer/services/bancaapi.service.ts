import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerApi, CustomerDetailAPI } from 'src/app/interfaces/banca-api.interface';

@Injectable({
  providedIn: 'root'
})
export class BancaapiService {

   //api local
  private _urlapilocal: string = "http://localhost/api/v1/banca.php?";
  constructor(
    private http: HttpClient
  ) { }
   /***** Funciones Diego *******/
   getCustomersD(type: number): Observable<CustomerApi[]> {
    return this.http.get<CustomerApi[]>(`${this._urlapilocal}listcustomer=${type}`);
  }
  getCustomerDetail(id: number): Observable<CustomerDetailAPI> {
    return this.http.get<CustomerDetailAPI>(`${this._urlapilocal}newcustomerdetail=${id}`);
  }
  getProductDetail(){
    
  }

}
