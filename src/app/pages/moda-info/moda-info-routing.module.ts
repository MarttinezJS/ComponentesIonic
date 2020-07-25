import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModaInfoPage } from './moda-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModaInfoPageRoutingModule {}
