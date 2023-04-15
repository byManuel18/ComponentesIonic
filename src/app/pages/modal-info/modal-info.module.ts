import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInfoPage } from './modal-info.page';
import { IonicModule } from '@ionic/angular';
import { ModalInfoPageRoutingModule } from './modal-info-routing.module';



@NgModule({
  declarations: [ModalInfoPage],
  imports: [
    CommonModule,
    IonicModule,
    ModalInfoPageRoutingModule
  ]
})
export class ModalInfoModule { }
