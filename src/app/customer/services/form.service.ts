import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accountTransaction, createProduct, creditCardConsumption, loanTransaction } from '../../interfaces/form.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  
  addProduct(product: createProduct): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(product);
    return this.http.post( "http://localhost:3000/product", body,{'headers':headers})
  }
  
  addTransaction(transaction: accountTransaction): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(transaction);
    return this.http.post( "http://localhost:3000/transaction", body,{'headers':headers})
  }
  
  addCreditCardTransaction(cdTransaction: creditCardConsumption ): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cdTransaction);
    return this.http.post( "http://localhost:3000/creditCardConsumption", body,{'headers':headers})
  }


  addLoanTransaction(loan: loanTransaction ): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(loan);
    return this.http.post( "http://localhost:3000/loan", body,{'headers':headers})
  }
}


