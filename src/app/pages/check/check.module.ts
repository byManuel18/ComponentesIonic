import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CheckPageRoutingModule } from './check-routing.module';
import { CheckPage } from './check.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckPage],
  imports: [
    CommonModule,
    IonicModule,
    CheckPageRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class CheckModule { }
