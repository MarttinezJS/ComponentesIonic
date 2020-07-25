import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-moda-info',
  templateUrl: './moda-info.page.html',
  styleUrls: ['./moda-info.page.scss'],
})
export class ModaInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {
    this.modalCtrl.dismiss({
      nombre: 'Estefani',
      pais: 'Colombia'
    });
  }

}
