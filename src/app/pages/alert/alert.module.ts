import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AlerPagetRoutingModule } from './alert-routing.module';
import { AlertPage } from './alert.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AlertPage],
  imports: [
    CommonModule,
    IonicModule,
    AlerPagetRoutingModule,
    ComponentsModule
  ]
})
export class AlertModule { }
