import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleaComponent } from './modulea.component';
import { ModuleaService } from './modulea.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ModuleaComponent,
      },
    ]),
  ],
  declarations: [ModuleaComponent],
  exports: [ModuleaComponent],
  providers: [ModuleaService],
})
export class ModuleaModule {}
