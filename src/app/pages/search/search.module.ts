import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './search.page';
import { IonicModule } from '@ionic/angular';
import { SearchPageRoutingModule } from './search-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule,
    IonicModule,
    SearchPageRoutingModule,
    PipesModule
  ]
})
export class SearchModule { }
