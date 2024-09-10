import { ChangeDetectionStrategy, Component } from '@angular/core';
import HomeComponent from '../../shared/components/home/home.component';
import HeaderComponent from './header.component';

@Component({
  selector: 'app-local-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <app-header />
    <app-shared-home />
  `,
  imports: [HeaderComponent, HomeComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class LocalHomeComponent {}
