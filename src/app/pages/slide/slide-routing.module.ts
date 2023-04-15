import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SlidePage } from './slide.page';

const routes: Route[] = [
  {
    path: '',
    component: SlidePage
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class SlidePageRoutingModule { }
