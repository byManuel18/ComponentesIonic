import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [CardPage],
  imports: [
    CommonModule,
    IonicModule,
    CardPageRoutingModule,
    ComponentsModule
  ]
})
export class CardModule { }
