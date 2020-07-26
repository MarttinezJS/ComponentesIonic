import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarrasPage } from './barras.page';

const routes: Routes = [
  {
    path: '',
    component: BarrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarrasPageRoutingModule {}
