import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from 'src/app/customer/services/detail.service';
import { Account, Transaction } from '../../../../interfaces/banca.interface';


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
  idProduct!: number;
  
  // para el pipe i18nSelect
  accountsMap = {
    'savings': 'Cuenta de Ahorro',
    'current': 'Cuenta Corriente',
    'fixed': 'Cuenta a plazo fijo',
  }

  // Objeto que tremos del back con los detalles de la cuenta
  accountDetail!: Account;

  // Lista de transacciones de la cuenta
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }
  
  ngOnInit(): void {
    this.detailService.getAccountDetail(this.idAccount).subscribe( detailaccountcredit => {
      this.accountDetail = detailaccountcredit;

      
      this.detailService.getAccountTransactions(this.accountDetail.id, 'account').subscribe( transactions => {
        this.transactions = transactions;
  
      });
    });

  }

  setValue(value:string, operation: string= 'withdrawal') {
    this.formSelected = value;
    this.operationType = operation; 
    this.numberAccount = this.accountDetail.numberaccount;
    this.idProduct = this.accountDetail.id;
  }


  
}
