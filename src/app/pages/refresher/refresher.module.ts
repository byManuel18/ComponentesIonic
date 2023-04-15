import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RefresherPage } from './refresher.page';
import { RefresherPageRoutingModule } from './refresher-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [RefresherPage],
  imports: [
    CommonModule,
    IonicModule,
    RefresherPageRoutingModule,
    ComponentsModule
  ]
})
export class RefresherModule { }
