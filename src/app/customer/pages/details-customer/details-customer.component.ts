import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DetailService } from '../../services/detail.service';
import { CreditCard, Account, Credit, Customer } from '../../../interfaces/banca.interface';


@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
})
export class DetailsCustomerComponent implements OnInit {

  user!: Customer;
  accounts: Account[] = [];
  loans: Credit[] = [];
  creditCards: CreditCard[] = [];


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
          console.log(this.user);
          this.detailService.getAccountsCustomer(customer.id)
              .subscribe( (accounts: Account[]) => {
                this.accounts = accounts;
              });
          this.detailService.getLoansCustomer(customer.id)
              .subscribe( (loans: Credit[]) => {
                this.loans = loans;
              });
          this.detailService.getCreditCardsCustomer(customer.id)
              .subscribe( (creditCards: CreditCard[]) => {
                this.creditCards = creditCards;
              });
        });

  }

 

}
