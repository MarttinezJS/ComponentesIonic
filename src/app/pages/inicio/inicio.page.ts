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
    {
      icon: 'compass-outline',
      name: 'botones y router',
      path: '/button'
    },
    {
      icon: 'images-outline',
      name: 'targetas',
      path: '/cards'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'checkbox',
      path: '/checkbox'
    },
    {
      icon: 'calendar-outline',
      name: 'Fechas',
      path: '/date-time'
    },
    {
      icon: 'color-wand-outline',
      name: 'fabs',
      path: '/fabs'
    },
    {
      icon: 'grid-outline',
      name: 'grid',
      path: '/grid'
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
