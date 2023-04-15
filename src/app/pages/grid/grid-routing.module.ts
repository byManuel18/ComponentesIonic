import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { GridPage } from './grid.page';

const routes: Route[] = [
  {
    path: '',
    component: GridPage
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
export class GridPageRoutingModule { }
