import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgressPageRoutingModule } from './progress-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProgressPage } from './progress.page';



@NgModule({
  declarations: [ProgressPage],
  imports: [
    CommonModule,
    IonicModule,
    ProgressPageRoutingModule,
    ComponentsModule
  ]
})
export class ProgressModule { }
