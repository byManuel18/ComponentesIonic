import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DateTimePage } from './date-time.page';

const routes: Route[] = [
  {
    path: '',
    component: DateTimePage
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class DateTimePageRoutingModule { }
