import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes-angular';
  navItems = [
    { label: 'Início', link: '/feed', title: 'Ir para Início' },
    { label: 'Minha rede', link: '/mynetwork', title: 'Minha rede' },
    { label: 'Vagas', link: '/jobs', title: 'Vagas' },
    { label: 'Mensagens', link: '/messaging', title: 'Mensagens' },
    { label: 'Notificações', link: '/notifications', title: 'Notificações' },
  ];
}
