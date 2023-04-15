import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ToastPage } from './toast.page';

const routes: Route[] = [
  {
    path: '',
    component: ToastPage
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ToastPageRoutingModule { }
