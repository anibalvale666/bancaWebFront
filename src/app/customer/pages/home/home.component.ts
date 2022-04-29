import { Component, OnInit } from '@angular/core';
import { CustomerApi } from 'src/app/interfaces/banca-api.interface';
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
  type: number = 0;

  clientCustomer:CustomerApi[] = [];
  //businessCustomers: CustomerApi[] = [];

  constructor(
    //private customerService: CustomerService
    private bancaService: BancaapiService
    ) { }
  
  ngOnInit(): void {

    //llamamos al metodo con el primer lista que es persona
    this.listCustomer(1);
   
  }
  

  //metodo para listar clientes personas
  listCustomer(type: number):void{
    
   if (type!==this.type) {
    this.bancaService.getCustomers(type).subscribe( customers => {
      this.clientCustomer = customers;
      this.type = type;
    });
   } 
  }
 

}
