import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: '', component: ProductsComponent},
      {path: 'detail/:id', component: DetailProductsComponent},
      {path: '**', redirectTo: ''},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
