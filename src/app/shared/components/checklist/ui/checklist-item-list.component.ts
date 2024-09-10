import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { ChecklistItem } from 'src/app/shared/interfaces/checklist-item';
@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-checklist-item-list',
  template: `
    <section>
      <ul>
        @for (item of checklistItems(); track item.id) {
          <li data-test="checklist-item">
            <div data-test="title">
              @if (item.checked) {
                <span data-test="checked-indicator">✅</span>
              }
              {{ item.title }}
            </div>
            <div>
              <button
                (click)="toggle.emit(item.id)"
                data-test="toggle-checklist-item-button"
              >
                Toggle
              </button>
              <button
                (click)="edit.emit(item)"
                data-test="edit-checklist-item-button"
              >
                Edit
              </button>
              <button
                (click)="delete.emit(item.id)"
                data-test="delete-checklist-item-button"
              >
                Delete
              </button>
            </div>
          </li>
        } @empty {
          <div>
            <h2 data-test="empty-header">Add an item</h2>
            <p data-test="no-checklist-items-message">
              Click the add button to add your first item to this quicklist
            </p>
          </div>
        }
      </ul>
    </section>
  `,
  styles: [
    `
      ul {
        padding: 0;
        margin: 0;
      }
      li {
        font-size: 1.5em;
        display: flex;
        justify-content: space-between;
        background: var(--color-light);
        list-style-type: none;
        margin-bottom: 1rem;
        padding: 1rem;

        button {
          margin-left: 1rem;
        }
      }
    `,
  ],
})
export class ChecklistItemListComponent {
  checklistItems = input.required<ChecklistItem[]>();
  delete = output<string>();
  edit = output<ChecklistItem>();
  toggle = output<string>();
}
