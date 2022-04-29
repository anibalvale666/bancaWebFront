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
import { DetailService } from '../../services/detail.service';
import { Customer, account, loan, creditCard } from '../../../interfaces/banca-api.interface';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
})
export class DetailsCustomerComponent implements OnInit {

  user!: Customer;
  accounts: account[] = [];
  loans: loan[] = [];
  creditCards: creditCard[] = [];


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
