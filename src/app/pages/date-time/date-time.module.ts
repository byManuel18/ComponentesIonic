import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DateTimePageRoutingModule } from './date-time-routing.module';
import { DateTimePage } from './date-time.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [DateTimePage],
  imports: [
    CommonModule,
    IonicModule,
    DateTimePageRoutingModule,
    ComponentsModule
  ]
})
export class DateTimeModule { }
