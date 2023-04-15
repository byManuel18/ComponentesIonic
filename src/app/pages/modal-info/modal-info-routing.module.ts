import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ModalInfoPage } from './modal-info.page';

const routes: Route[] = [
  {
    path: '',
    component: ModalInfoPage
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class ModalInfoPageRoutingModule { }
