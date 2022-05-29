import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculPageRoutingModule } from './calcul-routing.module';

import { CalculPage } from './calcul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculPageRoutingModule
  ],
  declarations: [CalculPage]
})
export class CalculPageModule {}
