import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SearchPage } from './search.page';

const routes: Route[] = [
  {
    path: '',
    component: SearchPage
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class SearchPageRoutingModule { }
