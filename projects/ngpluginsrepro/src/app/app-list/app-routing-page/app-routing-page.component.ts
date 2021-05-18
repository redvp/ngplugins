import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-routing-page',
  templateUrl: './app-routing-page.component.html',
  styleUrls: ['./app-routing-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppRoutingPageComponent {
  constructor() {}
}
