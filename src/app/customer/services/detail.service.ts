import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { account, creditCard } from 'src/app/interfaces/banca-api.interface';
import { Transaction } from '../../interfaces/customer.interface';
import { loan, Customer } from '../../interfaces/banca-api.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(    private http: HttpClient) { }

  //Funciones para Detalle de cuentas
  //retorna el detalle de cuenta enviando el id de la cuenta
  getAccountDetail(id: string): Observable<account> {
    return this.http.get<account>(`http://localhost:3000/cuenta_detail/${id}`);
  }

  //Retornamos el credito segun el id del prestamo
  getLoanDetail(id: string): Observable<loan> {
    return this.http.get<loan>(`http://localhost:3000/loan_detail/${id}`);
  }
  //Retornamos el credito segun el id del la tarjeta de credito
  getCreditCardDetail(id: string): Observable<creditCard> {
    return this.http.get<creditCard>(`http://localhost:3000/cc_detail/${id}`);
  }

  //retorna todas las transacciones de la cuenta enviando el id del producto
  getAccountTransactions(product_id: string): Observable<Transaction[]> {
    // return this.http.get<Transaction[]>(`http://localhost:3000/account_transaction/${product_id}`);
    return this.http.get<Transaction[]>(`http://localhost:3000/account_transaction`);
  }



  //Funciones para customerdetail
    /***** Funciones Anibal *******/
    // retornamos la data del customer segun su id
  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:3000/customer/${id}`);
  }

  // retornamos una lista de cuentas segun el id del customer
  getAccountsCustomer(id_customer: string): Observable<account []> {
    // return this.http.get<account[]>(`http://localhost:3000/cuenta_detail/${id_customer}`);
    return this.http.get<account []>(`http://localhost:3000/cuenta_detail`);
  }

    // retornamos una lista de prestamos segun el id del customer
  getLoansCustomer(id_customer: string): Observable<loan[]> {
    // return this.http.get<loan[]>(`http://localhost:3000/loan_detail/${id_customer}`);
    return this.http.get<loan[]>(`http://localhost:3000/loan_detail/`);
  }

    // retornamos una lista de tarjetas de credito segun el id del customer
  getCreditCardsCustomer(id_customer: string): Observable<creditCard[]> {
    // return this.http.get<creditCard[]>(`http://localhost:3000/cc_detail/${id_customer}`);
    return this.http.get<creditCard[]>(`http://localhost:3000/cc_detail/`);
  }


}
