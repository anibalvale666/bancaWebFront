import { Component, Input, OnInit } from '@angular/core';

import { CardCreditApi } from 'src/app/interfaces/banca-api.interface';

import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';
import { Transaction } from '../../../../interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail.service';
import { creditCard } from 'src/app/interfaces/banca-api.interface';


@Component({
  selector: 'app-detail-card-credit',
  templateUrl: './detail-card-credit.component.html',
  styleUrls: ['./detail-card-credit.component.css']
})
export class DetailCardCreditComponent implements OnInit {


  @Input() cardCreditApi!: CardCreditApi;
  constructor() { }

  //obtenemos el id de la cuenta seleccionada
  param_id = this.activatedRoute.snapshot.params['id'];

 
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  // dniRuc: string = "67507035";
  creditCardNumber: string = "";


  // Objeto que tremos del back con los detalles de la cuenta
  creditCardDetail!: creditCard;
  // Lista de transacciones de la tarjeta de credito
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }


  ngOnInit(): void {
    this.detailService.getCreditCardDetail(this.param_id).subscribe( detailaccountcredit => {
      this.creditCardDetail = detailaccountcredit;
      console.log(detailaccountcredit);
      console.log(typeof this.creditCardDetail);
      this.creditCardNumber = this.creditCardDetail.credit_card_number;
      this.detailService.getAccountTransactions(this.creditCardDetail.id).subscribe( transactions => {
        this.transactions = transactions;
        console.log(this.transactions);
      });
    });
  }

  
  setValue( operation: string= 'withdrawal'){
    this.operationType = operation;
  }


}
