import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailService } from '../../../services/detail.service';
import { CreditCard, Transaction } from 'src/app/interfaces/banca.interface';


@Component({
  selector: 'app-detail-card-credit',
  templateUrl: './detail-card-credit.component.html',
  styleUrls: ['./detail-card-credit.component.css']
})
export class DetailCardCreditComponent implements OnInit {

  //obtenemos el id de la cuenta seleccionada
  idProduct = this.activatedRoute.snapshot.params['id'];
  idOwner = this.activatedRoute.snapshot.params['idowner'];

 
  operationType: string = 'withdrawal'; // este campo solo puede ser de dos tipos;  deposit or withdrawal
  // dniRuc: string = "67507035";
  creditCardNumber: string = "";
 

  // Objeto que tremos del back con los detalles de la cuenta
  creditCardDetail!: CreditCard;
  // Lista de transacciones de la tarjeta de credito
  transactions: Transaction[]= [];

  constructor( private activatedRoute: ActivatedRoute,
               private detailService: DetailService 
  ) { }

  ngOnInit(): void {
    this.detailService.getCreditCardDetail(this.idProduct).subscribe( detailaccountcredit => {
      this.creditCardDetail = detailaccountcredit;
      this.creditCardNumber = this.creditCardDetail.numbercard;
      this.detailService.getAccountTransactions(this.creditCardDetail.id,'card-credit').subscribe( transactions => {
        this.transactions = transactions;

      });
    });
  }

  
  setValue( operation: string= 'withdrawal'){
    this.operationType = operation;
  }


}
