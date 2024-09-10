import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <header data-test="header">
      <h1>Quicklists: Local Storage Using SignalStore</h1>
    </header>
  `,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class HeaderComponent {}
