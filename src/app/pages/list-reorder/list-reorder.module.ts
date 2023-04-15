import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListReorderPageRoutingModule } from './list-reorder-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListReorderPage } from './list-reorder.page';



@NgModule({
  declarations: [ListReorderPage],
  imports: [
    CommonModule,
    IonicModule,
    ListReorderPageRoutingModule,
    ComponentsModule
  ]
})
export class ListReorderModule { }
