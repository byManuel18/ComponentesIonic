import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FabPage } from './fab.page';

const routes: Route[] = [
  {
    path: '',
    component: FabPage
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class FabPageRoutingModule { }
