import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AccountBack,
  LoanBack,
  CreditCardBack,
} from '../../interfaces/form.interface';
import { Observable } from 'rxjs';
import { TransactionBack } from '../../interfaces/form.interface';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  // funcion para la creacion de producto
  addProduct(
    product: AccountBack | LoanBack | CreditCardBack,
    type_product: string
  ): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(product);
    return this.http.post(`api/${type_product}`, body, {
      headers: headers,
    });
  }
  
  // Agrega transacciones de cuenta tarjetas y creditos
  addTransaction(transaction: TransactionBack): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(transaction);
    return this.http.post('api/transactions', body, {
      headers: headers,
    });
  }




}
