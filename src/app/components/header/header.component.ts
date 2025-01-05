import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems = [
    { label: 'Início', link: '/feed', title: 'Ir para Início' },
    { label: 'Minha rede', link: '/mynetwork', title: 'Minha rede' },
    { label: 'Vagas', link: '/jobs', title: 'Vagas' },
    { label: 'Mensagens', link: '/messaging', title: 'Mensagens' },
    { label: 'Notificações', link: '/notifications', title: 'Notificações' },
  ];
}
