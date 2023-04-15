import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfinitePageRoutingModule } from './infinite-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { InfinitePage } from './infinite.page';



@NgModule({
  declarations: [InfinitePage],
  imports: [
    CommonModule,
    IonicModule,
    InfinitePageRoutingModule,
    ComponentsModule
  ]
})
export class InfiniteModule { }
