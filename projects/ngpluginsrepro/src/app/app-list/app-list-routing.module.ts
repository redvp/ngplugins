import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalComponent } from '../internal/internal.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppRoutingPageComponent } from './app-routing-page/app-routing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-list',
    pathMatch: 'full',
  },
  {
    path: 'app-list',
    component: AppListComponent,
  },
  {
    path: 'apps',
    component: AppRoutingPageComponent,
    children: [
      {
        path: 'internal',
        component: InternalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppListRoutingModule {}
