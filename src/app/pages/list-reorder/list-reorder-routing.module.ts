import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListReorderPage } from './list-reorder.page';

const routes: Route[] = [
  {
    path: '',
    component: ListReorderPage
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
export class ListReorderPageRoutingModule { }
