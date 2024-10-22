import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  displayedColumns: string[] = ['username', 'email', 'password', 'actions'];
  dataSource = new MatTableDataSource<any>(); // Tabela com os dados filtrados
  originalDataSource: any[] = []; // Lista original sem filtro
  showPassword: boolean[] = [];

  // Variáveis para armazenar dados do novo usuário
  username: string = '';
  password: string = '';
  email: string = '';
  isAdmin: boolean = false;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(data); // Para debug
      this.dataSource.data = data.users || data; // Ajuste caso o JSON tenha o array dentro de 'users'
      this.originalDataSource = [...this.dataSource.data]; // Mantém a cópia original
      this.showPassword = new Array(this.dataSource.data.length).fill(false);  // Inicializa a visibilidade da senha como falsa
    });
  }

  addUser(): void {
    const newUser = {
      id: this.originalDataSource.length + 1, // Atribui um novo ID
      username: this.username,
      password: this.password,
      email: this.email,
      adm: this.isAdmin
    };

    this.userService.addUser(newUser).subscribe(() => {
      this.snackBar.open('Cadastrado com sucesso!', 'Fechar', {
        duration: 2000,
      });
      this.loadUsers(); // Recarrega a lista de usuários
      this.resetForm(); // Reseta o formulário
    });
  }

  resetForm(): void {
    this.username = '';
    this.password = '';
    this.email = '';
    this.isAdmin = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (filterValue) {
      this.dataSource.data = this.originalDataSource.filter(user =>
        user.username.toLowerCase().includes(filterValue) ||
        user.email.toLowerCase().includes(filterValue)
      );
    } else {
      // Se o campo estiver vazio, restaura a lista original
      this.dataSource.data = [...this.originalDataSource];
    }
  }

  togglePasswordVisibility(index: number): void {
    this.showPassword[index] = !this.showPassword[index];
  }

  goBack(): void {
    this.router.navigate(['/home']); // Navega para a página inicial
  }
}
