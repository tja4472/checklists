import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { AsyncPipe, JsonPipe } from '@angular/common';

/*
    <small>Persistence enabled: <code>{{ (persistenceEnabled | async) ?? false }}</code></small>
*/

@Component({
  selector: 'app-firestore',
  template: `<p>
    Firestore!
    <code>{{ testDocValue$ | async | json }}</code>
    <br />
  </p>`,
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
})
export class FirestoreComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public readonly testDocValue$: Observable<any>;
  // public readonly persistenceEnabled = _persistenceEnabled;

  constructor(firestore: Firestore) {
    const ref = doc(firestore, 'test/1');

    void setDoc(ref, { xx: 'DDD' });

    // this.testDocValue$ = docData(ref).pipe(traceUntilFirst('firestore'));
    this.testDocValue$ = docData(ref);
    // this.testDocValue$ = of('DummY')
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
}
