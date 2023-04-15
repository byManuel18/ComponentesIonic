import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToastPageRoutingModule } from './toast-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ToastPage } from './toast.page';



@NgModule({
  declarations: [ToastPage],
  imports: [
    CommonModule,
    IonicModule,
    ToastPageRoutingModule,
    ComponentsModule
  ]
})
export class ToastModule { }
