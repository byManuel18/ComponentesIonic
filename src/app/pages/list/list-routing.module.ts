import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListPage } from './list.page';


const routes: Route[] = [
  {
    path: '',
    component: ListPage
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
export class ListPageRoutingModule { }
