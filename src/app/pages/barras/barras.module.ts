import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarrasPageRoutingModule } from './barras-routing.module';

import { BarrasPage } from './barras.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarrasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BarrasPage]
})
export class BarrasPageModule {}
