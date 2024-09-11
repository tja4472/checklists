import { Signal } from '@angular/core';
import { Subject } from 'rxjs';
import {
  AddChecklistItem,
  ChecklistItem,
  EditChecklistItem,
} from 'src/app/shared/interfaces/checklist-item';

export abstract class ChecklistItemServiceBase {
  // selectors
  abstract checklistItems: Signal<ChecklistItem[]>;

  // sources
  abstract add$: Subject<AddChecklistItem>;
  abstract checklistRemoved$: Subject<string>;
  abstract edit$: Subject<EditChecklistItem>;
  abstract remove$: Subject<string>;
  abstract reset$: Subject<string>;
  abstract toggle$: Subject<string>;
}
