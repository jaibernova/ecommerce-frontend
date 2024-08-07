import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  getActiveProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/active-products`);
  }

  getTopSoldProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-sold-products`);
  }

  getTopCustomers(): Observable<any> {
    return this.http.get(`http://localhost:8080/auth/top-customers`);
  }
}
