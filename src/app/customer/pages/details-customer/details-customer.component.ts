import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AccountApi, CardCreditApi, CreditApi, CustomerApi } from 'src/app/interfaces/banca-api.interface';
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
  //customer!: CustomerInterface;
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

  //customerDetailApi!: CustomerDetailAPI;
  //customerDetailApi!: CustomerDetailAPI;
  /*********Pre Final */
  customerApi!: CustomerApi;
  accountsxCustomerApi : AccountApi[]=[];
  creditsxCustomerApi: CreditApi[]=[];
  cardsCreditApi: CardCreditApi[]=[];

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
    
    this.getCustomer(param);
    this.getAccountsXCustomer(param);
    this.getCreditsXCustomer(param);
    this.getCardCreditXCustomer(param);
    
    /*this.detailAccounts(param);
    this.detailCredits(param);*/
    //hacemos la suscripcion del servicio para obtener los datos de los creditos del customer
  }
  //metodo para hacer el llamado del detalle de cliente
  private getCustomer(param:number){
     //hacemos la suscripcion del servicio para obtener los datos del customer
     this.bancaService.getCustomerXId(param).subscribe((customerDetail) => {
      this.customerApi = customerDetail;
      /*(this.customerDetailApi.numberDoc.length===11)
        ? (this.isBussiness = true)
        : (this.isBussiness = false);*/
    }); 
  }
  private getAccountsXCustomer(param: number){
    this.bancaService.getAccountsXCustomer(param).subscribe((accounts)=>{
      this.accountsxCustomerApi = accounts;
    });
  }
  private getCreditsXCustomer(param: number){
    this.bancaService.getCreditsXCustomer(param).subscribe((credits)=>{
      this.creditsxCustomerApi= credits;
    });
  }
  private getCardCreditXCustomer(param: number){
    this.bancaService.getCardCreditsXCustomer(param).subscribe((cardCredits)=>{
      this.cardsCreditApi = cardCredits;
    });
  }
  

}
