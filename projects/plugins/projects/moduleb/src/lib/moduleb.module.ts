import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModulebComponent } from './moduleb.component';

@NgModule({
  declarations: [ModulebComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ModulebComponent,
      },
    ]),
  ],
  exports: [ModulebComponent],
})
export class ModulebModule {}
