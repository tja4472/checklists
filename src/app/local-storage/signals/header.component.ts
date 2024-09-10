import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <header>
      <h1 data-test="header">Quicklists: Local Storage Using Signals</h1>
    </header>
  `,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class HeaderComponent {}
