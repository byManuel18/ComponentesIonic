import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';
import { ActionSheetPage } from './action-sheet.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [ActionSheetPage],
  imports: [
    CommonModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule
  ]
})
export class ActionSheetModule { }
