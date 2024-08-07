import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/auth'; // Base URL según las rutas del controlador

  constructor(private http: HttpClient) {}

  // Método para registro de usuario
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Método para login de usuario
  loginUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  // Método para obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${userId}`);
  }

  // Método para crear usuario
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  // Método para actualizar usuario
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/${id}`, user);
  }

  // Método para eliminar usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
  
    // Verificar si el usuario es frecuente
    isFrequentCustomer(usernameOrEmail: string): Observable<boolean> {
      return this.http.get<boolean>(`${this.baseUrl}/isFrequent/${usernameOrEmail}`);
    }

    getUserId(usernameOrEmail: string): Observable<number> {
      return this.http.get<number>(`${this.baseUrl}/id?usernameOrEmail=${usernameOrEmail}`);
    }
}
