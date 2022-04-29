import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Auth } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _auth: Auth | undefined;


  get auth(): Auth {
    return  {...this._auth!};
  }

  constructor( private http: HttpClient) { }

    verificaAutenticacion(): Observable<boolean> {
      if( !localStorage.getItem('token') ) {
        return of(false);
      }
      
      return this.http.get<Auth>(`https://625ecf573b039517f1fcb8a7.mockapi.io/Login/${localStorage.getItem('token') }`)
        .pipe(
          switchMap( auth => {
            this._auth = auth;
             return of(true);
          })
        );
    }


  login(obj: any) {
    return this.http.get<Auth>(`https://625ecf573b039517f1fcb8a7.mockapi.io/Login/${obj.dniRuc}`)
          .pipe(
            tap( auth => this._auth = auth ),
            tap( auth => localStorage.setItem('token', auth.dniRuc ) ),
          );
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }
}
