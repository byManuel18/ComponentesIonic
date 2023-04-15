import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SegmentPage } from './segment.page';

const routes: Route[] = [
  {
    path: '',
    component: SegmentPage
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class SegmentPageRoutingModule { }
