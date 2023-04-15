import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoadingPage } from './loading.page';


const routes: Route[] = [
  {
    path: '',
    component: LoadingPage
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class LoadingPageRoutingModule { }
