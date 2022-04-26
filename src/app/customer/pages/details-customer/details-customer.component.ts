import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CustomerDetailAPI } from 'src/app/interfaces/banca-api.interface';
import {
  AccountsXCustomerInterfaceView,
  CreditXCustomerInterfaceView,
  CustomerInterface,
} from 'src/app/interfaces/customer.interface';
import { BancaapiService } from '../../services/bancaapi.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
})
export class DetailsCustomerComponent implements OnInit {
  //objeto referenciado a la interfaz de customer
  customer!: CustomerInterface;
  //objeto referenciado a la interfaz cuentasxclienteview
  accountsxcustomerview: AccountsXCustomerInterfaceView[] = [];
  //objeto referenciado a la interfaz cretisxclienteview
  creditxcustomerview: CreditXCustomerInterfaceView[] = [];
  //validar si es empresa o persona
  isBussiness: boolean = false;
  //validar currency
  isDollar: boolean = false;
  //monto
  private amountTotal: number = 0.0;

  /**********Nuevo Comienzo */

  customerDetailApi!: CustomerDetailAPI;

/********* */
  get AmountTotal(): number {
    return this.amountTotal;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private bancaService: BancaapiService
  ) {}

  ngOnInit(): void {
    //obtenemos el parametro de la ruta
    const param = this.activatedRoute.snapshot.params['id'];
    
    this.detailCustomer(param);
    /*this.detailAccounts(param);
    this.detailCredits(param);*/
    //hacemos la suscripcion del servicio para obtener los datos de los creditos del customer
  }
  //metodo para hacer el llamado del detalle de cliente
  private detailCustomer(param:number){
     //hacemos la suscripcion del servicio para obtener los datos del customer
     this.bancaService.getCustomerDetail(param).subscribe((customerDetail) => {
      this.customerDetailApi = customerDetail;
      /*(this.customerDetailApi.numberDoc.length===11)
        ? (this.isBussiness = true)
        : (this.isBussiness = false);*/
    }); 
  }
   //metodo para hacer el llamado del detalle de cuentas por cliente
  /*private detailAccounts(param:number){
      //hacemos la suscripcion del servicio para obtener los datos de las cuentas del customer
      this.customerService
      .getAccountsXCustomerView(param)
      .subscribe((account) => {
        this.accountsxcustomerview = account;
        /*this.accountsxcustomerview.forEach((item) => {
          this.amountTotal += Number(item.balance);
        });
      });
  }
   //metodo para hacer el llamado del detalle de creditos por cliente
  private detailCredits(param:number){
     //hacemos la suscripcion del servicio para obtener los datos de las tarjetas del customer
     this.customerService
     .getCreditXCustomerView(param)
     .subscribe((account) => {
       this.creditxcustomerview = account;
       /*this.accountsxcustomerview.forEach((item) => {
         this.amountTotal += Number(item.balance);
       });
     });
  }*/

}
