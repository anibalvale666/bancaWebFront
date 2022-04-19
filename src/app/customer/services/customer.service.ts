import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>('https://625ecf573b039517f1fcb8a7.mockapi.io/Customer');
  }

}
