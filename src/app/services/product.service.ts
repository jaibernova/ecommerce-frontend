import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}
  getActiveProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/active`);
  }

  getTopSoldProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/top-sold`);
  }
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  searchProducts(criteria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/search`, criteria);
  }

  submitOrder(orderRequest: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/orders`, orderRequest);
  }
}
