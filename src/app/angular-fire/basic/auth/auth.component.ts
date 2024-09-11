import { Component, OnInit, OnDestroy, Optional } from '@angular/core';
import {
  Auth,
  authState,
  // signInAnonymously,
  signOut,
  User,
} from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';
import { Router, RouterLink } from '@angular/router';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-auth',
  template: `
    <p>
      Auth!
      <code>{{ (user | async)?.uid }}</code>
      <button routerLink="./login" *ngIf="showLoginButton">Log in</button>
      <button (click)="logout()" *ngIf="showLogoutButton">Log out</button>
    </p>
  `,
  styles: [],
  standalone: true,
  imports: [NgIf, RouterLink, AsyncPipe],
})
export class AuthComponent implements OnInit, OnDestroy {
  private readonly userDisposable: Subscription | undefined;
  public readonly user: Observable<User | null> = EMPTY;

  showLoginButton = false;
  showLogoutButton = false;

  constructor(
    @Optional() private auth: Auth,
    private router: Router
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth)
        .pipe(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-explicit-any
          <any>traceUntilFirst('auth'),
          map((u) => !!u)
        )
        .subscribe((isLoggedIn: boolean) => {
          this.showLoginButton = !isLoggedIn;
          this.showLogoutButton = isLoggedIn;
        });
    }
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  async logout() {
    await signOut(this.auth);
  }
}
