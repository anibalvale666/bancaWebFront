import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCustomerComponent } from './pages/details-customer/details-customer.component';
import { DetailsCustomerProductsComponent } from './pages/details-customer-products/details-customer-products.component';

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children:[
      {path: '', component: HomeComponent},
      {path: 'detailcustomer/:id', component: DetailsCustomerComponent},
      {path: 'customerproducts/:id', component: DetailsCustomerProductsComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
