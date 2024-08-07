import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private tokenKey = 'authToken'; // Clave para almacenar el token en el local storage

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password })
      .pipe(tap((response: any) => {
        if (response) {
          localStorage.setItem(this.tokenKey, response.token); // Guardar el token en el local storage
        }
      }));
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Retorna true si hay un token en el local storage, de lo contrario false
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Eliminar el token del local storage
  }
}
