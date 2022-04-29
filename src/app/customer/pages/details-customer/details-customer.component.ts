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
import { DetailService } from '../../services/detail.service';
import { Customer, account, loan, creditCard } from '../../../interfaces/banca-api.interface';

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



  user!: Customer;
  accounts: account[] = [];
  loans: loan[] = [];
  creditCards: creditCard[] = [];


  //customerDetailApi!: CustomerDetailAPI;
  //customerDetailApi!: CustomerDetailAPI;
  /*********Pre Final */
  customerApi!: CustomerApi;
  accountsxCustomerApi : AccountApi[]=[];
  creditsxCustomerApi: CreditApi[]=[];
  cardsCreditApi: CardCreditApi[]=[];



  accountsMap = {
    'savings': 'Cuenta de Ahorro',
    'current': 'Cuenta Corriente',
    'fixed': 'Cuenta a plazo fijo',
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private detailService: DetailService
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
  

    this.detailService.getCustomer(param)
        .subscribe( (customer: Customer) => {
          this.user = customer;

          this.detailService.getAccountsCustomer(customer.id)
              .subscribe( (accounts: account[]) => {
                this.accounts = accounts;
              });
          this.detailService.getLoansCustomer(customer.id)
              .subscribe( (loans: loan[]) => {
                this.loans = loans;
              });
          this.detailService.getCreditCardsCustomer(customer.id)
              .subscribe( (creditCards: creditCard[]) => {
                this.creditCards = creditCards;
              });
        
            
        });

  }


}
