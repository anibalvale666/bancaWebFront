import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail.service';
import { Credit,Transaction } from '../../../../interfaces/banca.interface';

@Component({
  selector: 'app-detail-credit',
  templateUrl: './detail-credit.component.html',
  styleUrls: ['./detail-credit.component.css']
})
export class DetailCreditComponent implements OnInit {
  //obtenemos el id de la cuenta seleccionada
  idProduct = this.activatedRoute.snapshot.params['id'];
  idUser = this.activatedRoute.snapshot.params['idowner'];
  
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
  loanDetail!: Credit;

  // Lista de transacciones de la cuenta
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }
  
  ngOnInit(): void {
    this.detailService.getLoanDetail(this.idProduct).subscribe( loanDetail => {
      this.loanDetail = loanDetail;
      console.log(loanDetail);
      console.log(typeof this.loanDetail);
      
      this.detailService.getAccountTransactions(this.loanDetail.id,'credit').subscribe( transactions => {
        this.transactions = transactions;
        console.log(this.transactions);
      });
    });

  }

  // setValue(){
  //   this.idProduct = this.loanDetail.id;
  // }


}
