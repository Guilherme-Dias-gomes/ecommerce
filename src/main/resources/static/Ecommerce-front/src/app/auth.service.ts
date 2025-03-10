import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private apiUrl = 'http://localhost:8080'; // URL da API Spring Boot

constructor(private http: HttpClient) { }

  // Método para realizar o login
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post(`${this.apiUrl}/auth/login`, credentials).pipe(
      tap((response: any) => {
        // Salva o token JWT no localStorage
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  // Método para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Método para fazer logout
  logout(): void {
    localStorage.removeItem('token');
  }
}
