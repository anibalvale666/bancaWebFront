import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { account, creditCard } from 'src/app/interfaces/banca-api.interface';
import { Transaction } from '../../interfaces/customer.interface';
import { loan } from '../../interfaces/banca-api.interface';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(    private http: HttpClient) { }

  //Funciones para Detalle de cuentas
  //retorna el detalle de cuenta enviando el id de la cuenta
  getAccountDetail(id: number): Observable<account> {
    return this.http.get<account>(`http://localhost:3000/cuenta_detail/${id}`);
  }

  //retorna todas las transacciones de la cuenta enviando el id de la cuenta
  getAccountTransactions(product: string): Observable<Transaction[]> {
    // return this.http.get<Transaction[]>(`http://localhost:3000/account_transaction/${account_id}`);
    return this.http.get<Transaction[]>(`http://localhost:3000/account_transaction`);
  }

  //Funciones para créditos 
  getLoanDetail(id: number): Observable<loan> {
    return this.http.get<loan>(`http://localhost:3000/loan_detail/${id}`);
  }
  getCreditCardDetail(id: number): Observable<creditCard> {
    return this.http.get<creditCard>(`http://localhost:3000/cc_detail/${id}`);
  }


}
