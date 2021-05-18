import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppListRoutingModule } from './app-list-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { AppRoutingPageComponent } from './app-routing-page/app-routing-page.component';

@NgModule({
  declarations: [AppListComponent, AppRoutingPageComponent],
  imports: [CommonModule, AppListRoutingModule],
})
export class AppListModule {}
