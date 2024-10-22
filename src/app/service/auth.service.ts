import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // URL do JSON Server

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
          sessionStorage.setItem('user', username); // Armazena o nome do usuário na sessão
          return true; // Login bem-sucedido
        }
        return false; // Login falhou
      })
    );
  }

  logout() {
    sessionStorage.removeItem('user'); // Remove o usuário da sessão
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('user'); // Retorna true se o usuário estiver logado
  }

  getUsername(): string | null {
    return sessionStorage.getItem('user');
  }
}
