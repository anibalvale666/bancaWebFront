import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {
  // tipo de formulario seleccionado
  formSelected: string = 'creditPaymentForm'; // accountForm, createProductForm, creditCardForm, creditPaymentForm

  dniRuc: number = 67507035;
  
  // TODO campo de formulario id de crédito
      

  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor() { }

  ngOnInit(): void {
  }



}
