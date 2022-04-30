import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerDetailAPI } from 'src/app/interfaces/banca-api.interface';

@Injectable({
  providedIn: 'root'
})
export class BancaapiService {

   //api local
  private _urlapilocal: string = "https://pruebaapi2.000webhostapp.com/api/banca.php?";
  constructor(
    private http: HttpClient
  ) { }
  
  // regresamos una lista de customer segun el tipo de user: personal o business
   getCustomersD(type: string): Observable<Customer[]> {
    // return this.http.get<Customer[]>(`${this._urlapilocal}listcustomer=${type}`);
    return this.http.get<Customer[]>(`http://localhost:8080/api/customers?type=${type}`);
  }

  // getCustomerDetail(id: number): Observable<CustomerDetailAPI> {
  //   return this.http.get<CustomerDetailAPI>(`${this._urlapilocal}newcustomerdetail=${id}`);
  // }


}
