import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPage } from './input.page';
import { IonicModule } from '@ionic/angular';
import { InputPageRoutingModule } from './input-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InputPage],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    InputPageRoutingModule,
    ComponentsModule
  ]
})
export class InputModule { }
