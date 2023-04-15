import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GridPageRoutingModule } from './grid-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { GridPage } from './grid.page';



@NgModule({
  declarations: [GridPage],
  imports: [
    CommonModule,
    IonicModule,
    GridPageRoutingModule,
    ComponentsModule
  ]
})
export class GridModule { }
