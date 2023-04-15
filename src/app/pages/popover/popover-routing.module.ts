import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PopoverPage } from './popover.page';

const routes: Route[] = [
  {
    path: '',
    component: PopoverPage
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PopoverPageRoutingModule { }
