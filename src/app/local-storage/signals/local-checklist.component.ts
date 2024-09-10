import { ChangeDetectionStrategy, Component } from '@angular/core';
import ChecklistComponent from '../../shared/components/checklist/checklist.component';
import HeaderComponent from './header.component';

@Component({
  selector: 'app-local-checklist',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <app-header />
    <app-checklist />
  `,
  imports: [HeaderComponent, ChecklistComponent],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class LocalChecklistComponent {}
