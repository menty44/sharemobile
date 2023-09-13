import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleleadsPageRoutingModule } from './saleleads-routing.module';

import { SaleleadsPage } from './saleleads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleleadsPageRoutingModule
  ],
  declarations: [SaleleadsPage]
})
export class SaleleadsPageModule {}
