import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModaInfoPageRoutingModule } from './moda-info-routing.module';

import { ModaInfoPage } from './moda-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaInfoPageRoutingModule
  ],
  declarations: [ModaInfoPage]
})
export class ModaInfoPageModule {}
