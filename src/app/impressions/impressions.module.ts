import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpressionsPageRoutingModule } from './impressions-routing.module';

import { ImpressionsPage } from './impressions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpressionsPageRoutingModule
  ],
  declarations: [ImpressionsPage]
})
export class ImpressionsPageModule {}
