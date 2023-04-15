import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProgressPage } from './progress.page';

const routes: Route[] = [
  {
    path: '',
    component: ProgressPage
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProgressPageRoutingModule { }
