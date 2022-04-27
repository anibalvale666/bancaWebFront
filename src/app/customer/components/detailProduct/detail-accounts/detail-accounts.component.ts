import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-accounts',
  templateUrl: './detail-accounts.component.html',
  styleUrls: ['./detail-accounts.component.css']
})
export class DetailAccountsComponent implements OnInit {
  param_id = this.activatedRoute.snapshot.params['id'];
  // tipo de formulario seleccionado
  formSelected: string = 'accountForm'; // accountForm, createProductForm, creditCardForm, creditPaymentForm
  // accountForm
  
  // TODO enviar numero de cuenta dinamicamente
  numberAccount: number = 1234560978;
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal

  @Input() detailaccountcredit!: DetailAccountCredit;
  constructor(    private activatedRoute: ActivatedRoute,) { }
  
  ngOnInit(): void {
  }

  setValue(value:string, operation: string= 'withdrawal'){
    this.formSelected = value;
    this.operationType = operation;
  }


}
