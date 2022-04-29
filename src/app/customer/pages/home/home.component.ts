import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/banca-api.interface';
import { CustomerInterface } from 'src/app/interfaces/customer.interface';
import { BancaapiService } from '../../services/bancaapi.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //type
  type_customer: string = 'personal';
  loading: boolean = true;
  clientCustomer:Customer[] = [];
  //businessCustomers: CustomerApi[] = [];

  constructor(
    //private customerService: CustomerService
    private bancaService: BancaapiService
    ) { }
  
  ngOnInit(): void {

    //llamamos al metodo con el primer lista que es persona

    this.bancaService.getCustomersD('personal').subscribe( customers => {
      this.clientCustomer = customers;
      this.type_customer = 'personal';  
      this.loading = false;
    });
   
  }
  

  //metodo para listar clientes personas
  listCustomer(type: string):void{
    
   if (type!==this.type) {
    this.bancaService.getCustomers(type).subscribe( customers => {

   if (type!==this.type_customer) {
    this.bancaService.getCustomersD(type).subscribe( customers => {

      this.clientCustomer = customers;
      this.type_customer = type;
      this.loading = false;
    });
   } 
  }
 

}
