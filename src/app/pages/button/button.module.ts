import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonPageRoutingModule } from './button-routing.module';
import { ButtonPage } from './button.page';



@NgModule({
  declarations: [ButtonPage],
  imports: [
    CommonModule,
    IonicModule,
    ButtonPageRoutingModule
  ]
})
export class ButtonModule { }
