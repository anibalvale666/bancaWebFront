import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  
import { AccountOperationsComponent } from './components/forms/account-operations/account-operations.component';
import { DetailsCustomerComponent } from './pages/details-customer/details-customer.component';
import { DetailsCustomerProductsComponent } from './pages/details-customer-products/details-customer-products.component';
import { CreditCardConsumptionComponent } from './components/forms/credit-card-consumption/credit-card-consumption.component';
import { CreditPaymentsComponent } from './components/forms/credit-payments/credit-payments.component';
import { CreateProductComponent } from './components/forms/create-product/create-product.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children:[
      {path: '', component: HomeComponent},
      {path: ':id', component: DetailsCustomerComponent},
      {path: ':idowner/customerproducts/:id/:type' , component: DetailsCustomerProductsComponent},
      {path: 'accountform', component: AccountOperationsComponent},
      {path: 'createproductform', component: CreateProductComponent},
      {path: 'creditcardform', component: CreditCardConsumptionComponent},
      {path: 'creditpaymentform', component: CreditPaymentsComponent},
      {path: '**', redirectTo: ''},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
