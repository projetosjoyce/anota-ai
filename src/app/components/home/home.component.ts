import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'; // Importa o AuthService
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = ''; // Inicializa o nome do usuário como vazio

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.authService.getUsername() || 'Nome do Usuário'; // Pega o nome do usuário do AuthService
  }

  onLogout(): void {
    this.authService.logout(); // Chama o método de logout do serviço
    console.log('Usuário saiu'); // Mensagem de logout
    this.router.navigate(['/login']); // Redireciona para a página de login
  }

}
