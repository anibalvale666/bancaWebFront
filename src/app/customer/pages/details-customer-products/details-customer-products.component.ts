import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailAccountCredit, Transaction } from 'src/app/interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-details-customer-products',
  templateUrl: './details-customer-products.component.html',
  styleUrls: ['./details-customer-products.component.css']
})
export class DetailsCustomerProductsComponent implements OnInit {
  
  detailaccountcredit!: DetailAccountCredit;
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
  

  
  get isAccount() : boolean {
    if (this.type==="account") {
      return true;
    }
    return false;
  }
  get isCredit(): boolean{
    if (this.type==="credit") {
      return true;
    }
    return false;
  }

  get isCardCredit(): boolean{
    if (this.type==="card-credit") {
      return true;
    }
    return false;
  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    const id:number = this.activatedRoute.snapshot.params['id'];
    this.type = this.activatedRoute.snapshot.params['type'];
   
    //this.detailAccountCredit(id,type);
    //this.transactions(id,type);
    
  }
  /*private detailAccountCredit(id:number ,type:string ){
    this.customerService.getAccountCredit(id,type).subscribe(
      res=>{
        this.detailaccountcredit = res;
      }
    );
  }
  private transactions(id:number, type:string){
    this.customerService.getTransacciones(id,type).subscribe(
      res=>{
        this.detailTransaction = res;
      }
    );
  }*/

}
