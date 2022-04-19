import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { TableCustomerComponent } from './components/table-customer/table-customer.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCustomerComponent } from './pages/details-customer/details-customer.component';
import { DetailsCustomerProductsComponent } from './pages/details-customer-products/details-customer-products.component';
import { CreditCardConsumptionComponent } from './components/forms/credit-card-consumption/credit-card-consumption.component';
import { AccountOperationsComponent } from './components/forms/account-operations/account-operations.component';
import { CreateProductComponent } from './components/forms/create-product/create-product.component';

@NgModule({
  declarations: [
    TableCustomerComponent,
    HomeComponent,
    DetailsCustomerComponent,
    DetailsCustomerProductsComponent,
    CreditCardConsumptionComponent,
    AccountOperationsComponent,
    CreateProductComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
