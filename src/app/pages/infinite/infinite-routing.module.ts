import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { InfinitePage } from './infinite.page';

const routes: Route[] = [
  {
    path: '',
    component: InfinitePage
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
export class InfinitePageRoutingModule { }
