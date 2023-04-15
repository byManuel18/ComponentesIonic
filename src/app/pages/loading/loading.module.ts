import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPage } from './loading.page';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoadingPageRoutingModule } from './loading-routing.module';



@NgModule({
  declarations: [LoadingPage],
  imports: [
    CommonModule,
    IonicModule,
    LoadingPageRoutingModule,
    ComponentsModule
  ]
})
export class LoadingModule { }
