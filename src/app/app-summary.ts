import { Component }       from '@angular/core';
import { CommonModule }    from '@angular/common';
import { AppStateService } from './app-state.service';
import { Observable }      from 'rxjs';
import { AppState }        from './app-state.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-box">
      <h2>Session Summary</h2>
      <pre>{{ state$ | async | json }}</pre>
    </div>
  `,
  styles: [`
    .summary-box {
      background: #eef;
      border: 1px solid #99c;
      padding: 1rem;
      border-radius: 6px;
      font-family: monospace;
    }
    pre { white-space: pre-wrap; }
  `]
})
export class AppSummaryComponent {
  state$: Observable<AppState>;

  constructor(private store: AppStateService) {
    this.state$ = this.store.state$;
  }
}
