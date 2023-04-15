import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { TabsPage } from './tabs.page';



@NgModule({
  declarations: [TabsPage],
  imports: [
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
    ComponentsModule
  ]
})
export class TabsModule { }
