import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const rotes: Route[] = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(m=>m.AvatarModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../list/list.module').then(m=>m.ListModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../infinite/infinite.module').then(m=>m.InfiniteModule)
      },
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(rotes),
  ],
  exports:[RouterModule]
})
export class TabsPageRoutingModule { }
