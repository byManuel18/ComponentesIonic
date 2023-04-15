import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentPage } from './segment.page';
import { IonicModule } from '@ionic/angular';
import { SegmentPageRoutingModule } from './segment-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [SegmentPage],
  imports: [
    CommonModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentsModule,
    PipesModule
  ]
})
export class SegmentModule { }
