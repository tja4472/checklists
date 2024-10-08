import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Checklist } from 'src/app/shared/interfaces/checklist';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-checklist-header',
  template: `
    <header>
      <a data-test="back-button" routerLink="../../">Back</a>
      <h1 data-test="checklist-title">
        {{ checklist().title }}
      </h1>
      <div>
        <button
          (click)="resetChecklist.emit(checklist().id)"
          data-test="reset-items-button"
        >
          Reset
        </button>
        <button
          (click)="addItem.emit()"
          data-test="create-checklist-item-button"
        >
          Add item
        </button>
      </div>
    </header>
  `,
  styles: [
    `
      button {
        margin-left: 1rem;
      }
    `,
  ],
  imports: [RouterLink],
})
export class ChecklistHeaderComponent {
  checklist = input.required<Checklist>();
  addItem = output();
  resetChecklist = output<string>();
}
