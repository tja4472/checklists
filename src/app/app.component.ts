import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 data-test="welcome">Welcome to {{ title }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'Checklists';

  constructor(@Optional() private auth: Auth) {
    // signInAnonymously(this.auth);
  }
}
