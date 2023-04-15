import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FabPageRoutingModule } from './fab-routing.module';
import { FabPage } from './fab.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [FabPage],
  imports: [
    CommonModule,
    IonicModule,
    FabPageRoutingModule,
    ComponentsModule
  ]
})
export class FabModule { }
