import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges{

  // tipo de formulario seleccionado
  formSelected: string = 'accountForm'; // accountForm, createProductForm, creditCardForm, creditPaymentForm


    // accountForm
    numberAccount: number = 1234560978;
    operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  
    // createProductForm and credicardForm and creditpaymentform
    dniRuc: number = 67507035;
    
    // creditCardForm
    creditCardNumber: number = 11122233344455;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('casdasdasd')
  }

  ngOnInit(): void {
  }



  setValue(value:string, operation: string= 'withdrawal'){
    this.formSelected = value;
    this.operationType = operation;
  }



}
