import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { /*Account,*/ AccountApi, CardCreditApi, CreditApi, CustomerApi, /*CustomerDetailAPI*/ } from 'src/app/interfaces/banca-api.interface';

import { Customer, CustomerDetailAPI } from 'src/app/interfaces/banca-api.interface';


@Injectable({
  providedIn: 'root'
})
export class BancaapiService {

   //api local

  //private _urlapilocal: string = "https://pruebaapi2.000webhostapp.com/api/banca.php?";
  private _urlapilocal: string = "http://localhost:8080/api";
  constructor(
    private http: HttpClient
  ) { }
   /***** Funciones Diego *******/
   getCustomers(type: number): Observable<CustomerApi[]> {
    return this.http.get<CustomerApi[]>(`${this._urlapilocal}/customers?type=${type}`);
  }
  getCustomerXId(id: number):Observable<CustomerApi>{
    return this.http.get<CustomerApi>(`${this._urlapilocal}/customers/${id}`);
  }
  getAccountsXCustomer(idCustomer: number):Observable<AccountApi[]> {
    return this.http.get<AccountApi[]>(`${this._urlapilocal}/accounts?customer=${idCustomer}`);
  }
  getCreditsXCustomer(idCustomer: number):Observable<CreditApi[]> {
    return this.http.get<CreditApi[]>(`${this._urlapilocal}/credits?customer=${idCustomer}`);
  }
  getCardCreditsXCustomer(idCustomer: number):Observable< CardCreditApi[]> {
    return this.http.get<CardCreditApi[]>(`${this._urlapilocal}/card-credits?customer=${idCustomer}`);
  }


  getAccountXCustomer(idCustomer: number):Observable<AccountApi> {
    return this.http.get<AccountApi>(`${this._urlapilocal}/accounts/${idCustomer}`);
  }
  getCreditXCustomer(idCustomer: number):Observable<CreditApi> {
    return this.http.get<CreditApi>(`${this._urlapilocal}/credits/${idCustomer}`);
  }
  getCardCreditXCustomer(idCustomer: number):Observable< CardCreditApi> {
    return this.http.get<CardCreditApi>(`${this._urlapilocal}/card-credits/${idCustomer}`);
  }


  /*getCustomerDetail(id: number): Observable<CustomerDetailAPI> {
    return this.http.get<CustomerDetailAPI>(`${this._urlapilocal}newcustomerdetail=${id}`);
  }
  getProductDetail(){
    
  }*/

  private _urlapilocal: string = "https://pruebaapi2.000webhostapp.com/api/banca.php?";
  constructor(
    private http: HttpClient
  ) { }
  
  // regresamos una lista de customer segun el tipo de user: personal o business
   getCustomersD(type: string): Observable<Customer[]> {
    // return this.http.get<Customer[]>(`${this._urlapilocal}listcustomer=${type}`);
    return this.http.get<Customer[]>(` http://localhost:3000/customer?type_customer=${type}`);
  }


  // getCustomerDetail(id: number): Observable<CustomerDetailAPI> {
  //   return this.http.get<CustomerDetailAPI>(`${this._urlapilocal}newcustomerdetail=${id}`);
  // }


}
