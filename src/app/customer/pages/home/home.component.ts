import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  label: string = "Lista de Personas";
  active: boolean = true;

  constructor() { }
  //metodo para listar clientes personas
  listPeople():void{
    this.active=true;
    console.log("listar personas");
    this.label = "Lista de Personas";
  }
  //metodo para listar clientes Empresas
  listCompanies():void{
    this.active=false;
    console.log("listar empresas");
    this.label = "Lista de Empresas";
  }

  ngOnInit(): void {
    this.listPeople();
  }

}
