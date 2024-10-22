import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AgendaDigitalComponent } from './components/agenda-digital/agenda-digital.component';
import { CadastroUsuariosComponent } from './components/cadastro-usuarios/cadastro-usuarios.component';
import { CadastraSeComponent } from './components/cadastra-se/cadastra-se.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'agenda-digital', component: AgendaDigitalComponent },
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'cadastrar-se', component: CadastraSeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


