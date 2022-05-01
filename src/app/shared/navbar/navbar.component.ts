import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: boolean = false;
  constructor(private router: Router,
              private authService: AuthService) {}
  //-----Para cerrar el sidebar----//
  CancelBtn() {
    this.menu = false;
  }
  //Para mostrar sidebar
  MenuBtn() {
    this.menu = true;
  }
  //----Fin Para dar funcionalidad al navbar---/

  ngOnInit(): void {
    //funcion click
  }

  //Verificar si esta logueado, o ya fue logeado
  isLogin(): Boolean{
    if(!localStorage.getItem('token')){
      return false;
    }
    return true;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
