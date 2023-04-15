import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvatarPageRoutingModule } from './avatar-routing.module';
import { AvatarPage } from './avatar.page';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AvatarPage],
  imports: [
    CommonModule,
    IonicModule,
    AvatarPageRoutingModule,
    ComponentsModule
  ]
})
export class AvatarModule { }
