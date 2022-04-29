import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountApi, CardCreditApi, CreditApi } from 'src/app/interfaces/banca-api.interface';
import { DetailAccountCredit, Transaction } from 'src/app/interfaces/customer.interface';
import { BancaapiService } from '../../services/bancaapi.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-details-customer-products',
  templateUrl: './details-customer-products.component.html',
  styleUrls: ['./details-customer-products.component.css']
})
export class DetailsCustomerProductsComponent implements OnInit {
  
  accountApi!: AccountApi; 
  creditApi!: CreditApi;
  cardCreditApi!:CardCreditApi;
  detailTransaction: Transaction[] = [];

  // tipo de producto
  type: string= "";
  //label detail
  
  get label() : string {
    if (this.type==="account") {
      return "Cuenta";
    }else if(this.type==="credit"){
      return "Crédito";
    }else{
      return "Tarjeta de Crédito";
    }
  }



  constructor(
    private activatedRoute: ActivatedRoute,
    private bancaService: BancaapiService
  ) { }

  ngOnInit(): void {
    const id:number = this.activatedRoute.snapshot.params['id'];
    this.type = this.activatedRoute.snapshot.params['type'];
    
    if (this.type==="account") {
      this.getAccountXCustomer(id);
    }else if(this.type==="credit"){
      this.getCreditXCustomer(id);
    }else{
      this.getCardCreditXCustomer(id);
    }
    
  }
  private getAccountXCustomer(param: number){
    this.bancaService.getAccountXCustomer(param).subscribe((accounts)=>{
      this.accountApi = accounts;
    });
  }
  private getCreditXCustomer(param: number){
    this.bancaService.getCreditXCustomer(param).subscribe((credits)=>{
      this.creditApi= credits;
    });
  }
  private getCardCreditXCustomer(param: number){
    this.bancaService.getCardCreditXCustomer(param).subscribe((cardCredits)=>{
      this.cardCreditApi = cardCredits;
    });
  }

}
