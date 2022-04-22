import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountOperationsComponent } from './components/forms/account-operations/account-operations.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CreditCardConsumptionComponent } from './components/forms/credit-card-consumption/credit-card-consumption.component';
import { CreateProductComponent } from './components/forms/create-product/create-product.component';
import { CreditPaymentsComponent } from './components/forms/credit-payments/credit-payments.component';
import { DetailsCustomerComponent } from './pages/details-customer/details-customer.component';
import { DetailsCustomerProductsComponent } from './pages/details-customer-products/details-customer-products.component';
import { HomeComponent } from './pages/home/home.component';
import { TableCustomerComponent } from './components/table-customer/table-customer.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    TableCustomerComponent,
    HomeComponent,
    DetailsCustomerComponent,
    DetailsCustomerProductsComponent,
    CreditCardConsumptionComponent,
    CreditPaymentsComponent,
    AccountOperationsComponent,
    CreateProductComponent,
    ModalComponent,
  ],

  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent
  ]

})
export class CustomerModule {}
