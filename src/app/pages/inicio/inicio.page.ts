import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'archive-outline',
      name: 'action sheet',
      path: '/action-sheet'
    },
    {
      icon: 'alert-outline',
      name: 'alerts',
      path: '/alerts'
    },
    {
      icon: 'image-outline',
      name: 'avatar',
      path: '/avatar'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  path: string;
}
