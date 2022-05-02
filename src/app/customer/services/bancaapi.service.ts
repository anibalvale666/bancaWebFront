import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/banca.interface';

@Injectable({
  providedIn: 'root',
})
export class BancaapiService {
  constructor(private http: HttpClient) {}

  // regresamos una lista de customer segun el tipo de user: personal o business
  getCustomersD(type: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      `http://localhost:8080/api/customers?type=${type}`
    );
  }
}
