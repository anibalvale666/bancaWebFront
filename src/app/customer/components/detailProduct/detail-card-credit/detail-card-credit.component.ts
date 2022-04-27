import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-detail-card-credit',
  templateUrl: './detail-card-credit.component.html',
  styleUrls: ['./detail-card-credit.component.css']
})
export class DetailCardCreditComponent implements OnInit {



 
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  dniRuc: number = 67507035;
  creditCardNumber: number = 11122233344455;



  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor() { }

  ngOnInit(): void {
  }

  
  setValue( operation: string= 'withdrawal'){
    this.operationType = operation;
  }


}
