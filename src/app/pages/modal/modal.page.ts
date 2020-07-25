import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaInfoPage } from '../moda-info/moda-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModaInfoPage,
      componentProps: {
        nombre: 'Jhonatan',
        pais: 'Colombia'
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log( 'Retorno del modal: ', data );
  }

}
