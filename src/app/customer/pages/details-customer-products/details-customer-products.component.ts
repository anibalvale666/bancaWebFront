import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/interfaces/banca.interface';

@Component({
  selector: 'app-details-customer-products',
  templateUrl: './details-customer-products.component.html',
  styleUrls: ['./details-customer-products.component.css'],
})
export class DetailsCustomerProductsComponent implements OnInit {
  detailTransaction: Transaction[] = [];

  // tipo de producto
  type: string = '';
  //label detail

  get label(): string {
    if (this.type === 'account') {
      return 'Cuenta';
    } else if (this.type === 'credit') {
      return 'Crédito';
    } else {
      return 'Tarjeta de Crédito';
    }
  }

  get isAccount(): boolean {
    if (this.type === 'account') {
      return true;
    }
    return false;
  }
  get isCredit(): boolean {
    if (this.type === 'credit') {
      return true;
    }
    return false;
  }

  get isCardCredit(): boolean {
    if (this.type === 'card-credit') {
      return true;
    }
    return false;
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id: number = this.activatedRoute.snapshot.params['id'];
    this.type = this.activatedRoute.snapshot.params['type'];

    //this.detailAccountCredit(id,type);
    //this.transactions(id,type);
  }
}
