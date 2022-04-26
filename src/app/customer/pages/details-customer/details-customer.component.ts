import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import {
  AccountsXCustomerInterfaceView,
  CreditXCustomerInterfaceView,
  CustomerInterface,
} from 'src/app/interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css'],
})
export class DetailsCustomerComponent implements OnInit {
  //objeto referenciado a la interfaz de customer
  customer!: CustomerInterface;
  //objeto referenciado a la interfaz cuentasxclienteview
  accountsxcustomerview: AccountsXCustomerInterfaceView[] = [];
  //objeto referenciado a la interfaz cretisxclienteview
  creditxcustomerview: CreditXCustomerInterfaceView[] = [];
  //validar si es empresa o persona
  isBussiness: boolean = false;
  //validar currency
  isDollar: boolean = false;
  //monto
  private amountTotal: number = 0.0;
  //parametro de la ruta
  private param: number = 0;

  get AmountTotal(): number {
    return this.amountTotal;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    //obtenemos el parametro de la ruta
    this.param = this.activatedRoute.snapshot.params['id'];
    //hacemos la suscripcion del servicio para obtener los datos del customer
    this.customerService.getCustomerDetail(this.param).subscribe((customer) => {
      this.customer = customer;
      this.customer.dni === '' || this.customer.dni === null
        ? (this.isBussiness = true)
        : (this.isBussiness = false);
    });

    //hacemos la suscripcion del servicio para obtener los datos de las cuentas del customer
    this.customerService
      .getAccountsXCustomerView(this.param)
      .subscribe((account) => {
        this.accountsxcustomerview = account;
        /*this.accountsxcustomerview.forEach((item) => {
          this.amountTotal += Number(item.balance);
        });*/
      });
    //hacemos la suscripcion del servicio para obtener los datos de las tarjetas del customer
    this.customerService
      .getCreditXCustomerView(this.param)
      .subscribe((account) => {
        this.creditxcustomerview = account;
        /*this.accountsxcustomerview.forEach((item) => {
          this.amountTotal += Number(item.balance);
        });*/
      });
    //hacemos la suscripcion del servicio para obtener los datos de los creditos del customer
  }
}
