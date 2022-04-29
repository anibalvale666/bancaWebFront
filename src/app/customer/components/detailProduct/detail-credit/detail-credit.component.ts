import { Component, Input, OnInit } from '@angular/core';
import { DetailAccountCredit } from 'src/app/interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail.service';
import { Transaction } from '../../../../interfaces/customer.interface';
import { loan } from '../../../../interfaces/banca-api.interface';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {
  //obtenemos el id de la cuenta seleccionada
  param_id = this.activatedRoute.snapshot.params['id'];
  
  // Variables del formulario modal
  // tipo de formulario seleccionado
  loanNumber!: string;
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  // dniRuc: string = '123123';
  // para el pipe i18nSelect
  accountsMap = {
    'savings': 'Cuenta de Ahorro',
    'current': 'Cuenta Corriente',
    'fixed': 'Cuenta a plazo fijo',
  }

  // Objeto que tremos del back con los detalles de la cuenta
  loanDetail!: loan;

  // Lista de transacciones de la cuenta
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }
  
  ngOnInit(): void {
    this.detailService.getLoanDetail(this.param_id).subscribe( loanDetail => {
      this.loanDetail = loanDetail;
      console.log(loanDetail);
      console.log(typeof this.loanDetail);
      
      this.detailService.getAccountTransactions(this.loanDetail.id).subscribe( transactions => {
        this.transactions = transactions;
        console.log(this.transactions);
      });
    });

  }

  // setValue(operation: string= 'withdrawal'){
  //   this.operationType = operation; 
  //   this.loanNumber = this.loanDetail.loan_number;
  // }


}
