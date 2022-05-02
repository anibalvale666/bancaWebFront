import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css'],
})
export class DetailProductsComponent implements OnInit {
  product!: Product;
  features: String[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.params['id'];
    this.productService.dataByid(param).subscribe((product) => {
      this.product = product;
      // console.log(this.product);
      this.listFeatures();
    });
  }

  // metodo para regresar a la pagina de productos
  back() {
    this.router.navigate(['/products']);
  }

  // metodo para hacer el llamado del detalle de producto
  listFeatures() {
    this.features = this.product.description_detail.split('#');
  }
}
