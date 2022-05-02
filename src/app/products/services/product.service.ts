import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:8080/api/products';

  // Regresamos la data de todos los productos
  data(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }

  // Regresamos el producto mediante su id
  dataByid(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }
}
