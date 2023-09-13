import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImpressionsPage } from './impressions.page';

const routes: Routes = [
  {
    path: '',
    component: ImpressionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImpressionsPageRoutingModule {}
