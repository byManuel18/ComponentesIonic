import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InputPage } from './input.page';

const routes: Route[] = [
  {
    path: '',
    component: InputPage
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class InputPageRoutingModule { }
