import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../../components/components.module';
import { ModaInfoPage } from '../moda-info/moda-info.page';
import { ModaInfoPageModule } from '../moda-info/moda-info.module';

@NgModule({
  entryComponents: [
    ModaInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    ComponentsModule,
    ModaInfoPageModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
