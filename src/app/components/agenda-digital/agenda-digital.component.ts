import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-digital',
  templateUrl: './agenda-digital.component.html',
  styleUrls: ['./agenda-digital.component.scss']
})
export class AgendaDigitalComponent implements OnInit {
  orders = [
    { name: 'Usuário 1', email: 'usuario1@example.com', permission: 'Admin' },
    { name: 'Usuário 2', email: 'usuario2@example.com', permission: 'User' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
