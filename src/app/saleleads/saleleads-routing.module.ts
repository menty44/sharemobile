import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleleadsPage } from './saleleads.page';

const routes: Routes = [
  {
    path: '',
    component: SaleleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleleadsPageRoutingModule {}
