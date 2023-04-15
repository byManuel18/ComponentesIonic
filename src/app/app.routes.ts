import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimeModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module').then( m => m.GridModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./pages/infinite/infinite.module').then( m => m.InfiniteModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./pages/list-reorder/list-reorder.module').then( m => m.ListReorderModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then( m => m.PopoverModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then( m => m.ProgressModule)
  },
  {
    path: 'refresher',
    loadChildren: () => import('./pages/refresher/refresher.module').then( m => m.RefresherModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then( m => m.SegmentModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./pages/slide/slide.module').then( m => m.SlideModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module').then( m => m.ToastModule)
  },
];
