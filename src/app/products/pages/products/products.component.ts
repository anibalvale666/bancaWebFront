import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // variables para los productos
  products: Product[] = [];
  productsAccount: Product[] = [];
  productsLoan: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.data().subscribe((data) => {
      // console.log(data);
      this.products = data;
      this.productsAccount = data.filter(
        (product) => product.category === 'account'
      );
      this.productsLoan = data.filter((product) => product.category === 'loan');
      // console.log(this.productsLoan);
    });
  }
}
