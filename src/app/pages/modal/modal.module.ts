import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPage } from './modal.page';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalInfoModule } from '../modal-info/modal-info.module';



@NgModule({
  declarations: [ModalPage],
  imports: [
    CommonModule,
    IonicModule,
    ModalPageRoutingModule,
    ComponentsModule,
    ModalInfoModule
  ]
})
export class ModalModule { }
