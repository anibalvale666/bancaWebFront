import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }
  baseUrl = 'http://localhost:8080/api/products';

  // Regresamos la data de todos los productos
  data() {
    // return this.http.get<Product[]>('https://625ecf573b039517f1fcb8a7.mockapi.io/products');
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  // Regresamos el producto mediante su id
  dataByid(id: number) {
    // return this.http.get<Product>(`https://625ecf573b039517f1fcb8a7.mockapi.io/products/${id}`);
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }

}
