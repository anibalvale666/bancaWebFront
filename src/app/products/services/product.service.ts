import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  // Regresamos la data de todos los productos
  data() {
    return this.http.get<Product[]>('https://625ecf573b039517f1fcb8a7.mockapi.io/products');
  }

  // Regresamos el producto mediante su id
  dataByid(id: number) {
    return this.http.get<Product>(`https://625ecf573b039517f1fcb8a7.mockapi.io/products/${id}`);
  }

}
