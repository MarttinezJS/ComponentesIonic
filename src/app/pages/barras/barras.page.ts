import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.page.html',
  styleUrls: ['./barras.page.scss'],
})
export class BarrasPage implements OnInit {

  porcentaje: number;
  constructor() { }

  ngOnInit() {
  }

  cambioRango( event ) {
    this.porcentaje = event.detail.value / 100;
  }

}
