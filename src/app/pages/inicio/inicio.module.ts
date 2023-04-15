import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-router.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [InicioPage],
  imports: [
    CommonModule,
    IonicModule,
    InicioPageRoutingModule,
    ComponentsModule
  ]
})

export class InicioModule { }
