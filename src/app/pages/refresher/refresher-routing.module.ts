import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RefresherPage } from './refresher.page';

const routes: Route[] = [
  {
    path: '',
    component: RefresherPage
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class RefresherPageRoutingModule { }
