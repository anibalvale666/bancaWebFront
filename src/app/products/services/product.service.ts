import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient ) { }

  data() {
    return this.http.get<Product[]>('https://625ecf573b039517f1fcb8a7.mockapi.io/products');
  }
  dataByid(id: number) {
    return this.http.get<Product>(`https://625ecf573b039517f1fcb8a7.mockapi.io/products/${id}`);
  }

}
