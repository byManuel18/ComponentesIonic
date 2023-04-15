import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ModalPage } from './modal.page';

const routes: Route[] = [
  {
    path: '',
    component: ModalPage
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ModalPageRoutingModule { }
