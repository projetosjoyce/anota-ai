import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  username: string = '';
  password: string = '';
  message: string = ''; // Para exibir mensagens de erro ou sucesso

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(success => {
      if (success) {
        this.message = 'Login bem-sucedido!';
        this.router.navigate(['/home']); // Redireciona para a página desejada
      } else {
        this.message = 'Usuário ou senha inválidos.';
      }
    });
  }


}



