import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // cuando active esta en true muestra la lista de personas; else muestra la lista de empresas
  active: boolean = true;

  clientCustomer:any[] = [];
  businessCustomers: any[] = [];

  constructor(private customerService: CustomerService) { }
  
  ngOnInit(): void {

    // llamamos al servicio http y filtramos la respuesta en dos areglos, cliente y empresa 
    // utilizamos el campo dni para filtrarlo
    this.customerService.getCustomers().subscribe( customers => {
      this.clientCustomer = customers.filter( ({dni}) => !!dni ) ;
      this.businessCustomers = customers.filter( ({dni}) => !dni ) ;
      this.listPeople();

    });
  }

  //metodo para listar clientes personas
  listPeople():void{
    if(!this.active) {
      this.active=true;
      console.log("listar personas");
      console.log(this.clientCustomer);

    }

  }
  //metodo para listar clientes Empresas
  listCompanies():void{
    if(this.active) {
      this.active=false;
      console.log("listar empresas");
      console.log(this.businessCustomers);
    }
  }

}
