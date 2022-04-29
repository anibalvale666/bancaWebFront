import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/customer/services/detail.service';
import { account } from '../../../../interfaces/banca-api.interface';
import { Transaction } from '../../../../interfaces/customer.interface';



@Component({
  selector: 'app-detail-accounts',
  templateUrl: './detail-accounts.component.html',
  styleUrls: ['./detail-accounts.component.css'] 
})
export class DetailAccountsComponent implements OnInit {
  //obtenemos el id de la cuenta seleccionada
  idAccount = this.activatedRoute.snapshot.params['id'];
  idOwner = this.activatedRoute.snapshot.params['idowner'];
  
  // Variables del formulario modal
  // tipo de formulario seleccionado
  formSelected: string = 'accountForm'; // accountForm, createProductForm, creditCardForm, creditPaymentForm
  numberAccount!: string;
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  
  // para el pipe i18nSelect
  accountsMap = {
    'savings': 'Cuenta de Ahorro',
    'current': 'Cuenta Corriente',
    'fixed': 'Cuenta a plazo fijo',
  }

  // Objeto que tremos del back con los detalles de la cuenta
  accountDetail!: account;

  // Lista de transacciones de la cuenta
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }
  
  ngOnInit(): void {
    this.detailService.getAccountDetail(this.idAccount).subscribe( detailaccountcredit => {
      this.accountDetail = detailaccountcredit;
      console.log(detailaccountcredit);
      console.log(typeof this.accountDetail.balance);
      
      this.detailService.getAccountTransactions(this.accountDetail.id).subscribe( transactions => {
        this.transactions = transactions;
        console.log(this.transactions);
      });
    });

  }

  setValue(value:string, operation: string= 'withdrawal'){
    this.formSelected = value;
    this.operationType = operation; 
    this.numberAccount = this.accountDetail.account_number;
  }


  
}
