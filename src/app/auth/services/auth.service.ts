import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Customer } from '../../interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Customer | undefined;


  get auth(): Customer {
    return  {...this._auth!};
  }

  constructor( private http: HttpClient) { }

    verificaAutenticacion(): Observable<boolean> {
      if( !localStorage.getItem('token') ) {
        return of(false);
      }
      
      return this.http.get<Customer>(`http://localhost:8080/api/customers/doc/${localStorage.getItem('token') }`)
        .pipe(
          switchMap( auth => {
            this._auth = auth;
             return of(true);
          })
        );
    }


  login(obj: any) {
    return this.http.get<Customer>(`http://localhost:8080/api/customers/doc/${obj.dniRuc}`)
          .pipe(
            tap( auth => this._auth = auth ),
            tap( auth => localStorage.setItem('token', auth.doc ) ),
            );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }
}
