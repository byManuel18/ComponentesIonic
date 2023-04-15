import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListPageRoutingModule } from './list-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ListPage } from './list.page';



@NgModule({
  declarations: [ListPage],
  imports: [
    CommonModule,
    IonicModule,
    ListPageRoutingModule,
    ComponentsModule
  ]
})
export class ListModule { }
