import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Account,
  Credit,
  CreditCard,
  Transaction,
  Customer,
} from '../../interfaces/banca.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private http: HttpClient) {}

  //Funciones para Detalle de producto
  //retorna el detalle de cuenta enviando el id de la cuenta
  getAccountDetail(id: string): Observable<Account> {
    return this.http.get<Account>(`http://localhost:8080/api/accounts/${id}`);
  }

  //Retornamos el credito segun el id del prestamo
  getLoanDetail(id: string): Observable<Credit> {
    return this.http.get<Credit>(`http://localhost:8080/api/credits/${id}`);
  }
  //Retornamos el credito segun el id del la tarjeta de credito
  getCreditCardDetail(id: string): Observable<CreditCard> {
    return this.http.get<CreditCard>(
      `http://localhost:8080/api/card-credits/${id}`
    );
  }

  //retorna todas las transacciones de la cuenta enviando el id del producto
  getAccountTransactions(
    product_id: number,
    type_product: string
  ): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      `http://localhost:8080/api/transactions/${type_product}/${product_id}`
    );
  }

  //Funciones para customerdetail
  /***** Funciones Anibal *******/
  // retornamos la data del customer segun su id
  getCustomer(id: string): Observable<Customer> {
    return this.http.get<Customer>(`http://localhost:8080/api/customers/${id}`);
  }

  // retornamos una lista de cuentas segun el id del customer
  getAccountsCustomer(id_customer: number): Observable<Account[]> {
    return this.http.get<Account[]>(
      `http://localhost:8080/api/accounts?customer=${id_customer}`
    );
  }

  // retornamos una lista de prestamos segun el id del customer
  getLoansCustomer(id_customer: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(
      `http://localhost:8080/api/credits?customer=${id_customer}`
    );
  }

  // retornamos una lista de tarjetas de credito segun el id del customer
  getCreditCardsCustomer(id_customer: number): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(
      `http://localhost:8080/api/card-credits?customer=${id_customer}`
    );
  }

  //funcion para actualizar el balance de cuenta
  putAmount(
    id_product: number,
    payment: any,
    type_product: string
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(payment);
    return this.http.put(`api/${type_product}/${id_product}`, body, {
      headers: headers,
    });
  }
}
