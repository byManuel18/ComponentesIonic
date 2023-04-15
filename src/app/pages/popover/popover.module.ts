import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopoverPageRoutingModule } from './popover-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PopoverPage } from './popover.page';



@NgModule({
  declarations: [PopoverPage],
  imports: [
    CommonModule,
    IonicModule,
    PopoverPageRoutingModule,
    ComponentsModule
  ]
})
export class PopoverModule { }
