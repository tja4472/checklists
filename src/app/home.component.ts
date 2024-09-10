import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>Local Storage</h2>

    <a data-test="local-storage_signals-link" href="/local-storage/signals"
      >Using Signals</a
    ><br />
    <a data-test="local-storage-signal-store" href="/local-storage/signal-store"
      >Using Signal Store</a
    ><br />

    <h2>AngularFire</h2>
    <a data-test="angular-fire-basic" href="/angular-fire/basic">Basic</a><br />
    <a data-test="angular-fire-signals" href="/angular-fire/signals"
      >Using Signals</a
    ><br />
    Using Signal Store

    <h2>Firebase</h2>
    Basic<br />
    Using Signals<br />
    Using Signal Store
  `,
  standalone: true,
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class HomeComponent {}
