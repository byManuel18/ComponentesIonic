import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlidePageRoutingModule } from './slide-routing.module';
import { SlidePage } from './slide.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [SlidePage],
  imports: [
    CommonModule,
    IonicModule,
    SlidePageRoutingModule,
    ComponentsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlideModule { }
