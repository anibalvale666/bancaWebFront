import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu: boolean = false;
  constructor() {}
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
}
