// src/app/app.ts
import { Component }    from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule   } from '@angular/forms';

import { TermsBoxComponent      } from './terms-box/terms-box';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    TermsBoxComponent,
    LoanCalculatorComponent
  ],
  template: `
    <router-outlet></router-outlet>
    <hr>
    <h2>Loan Calculator (10 installments @ 6% p.a.)</h2>
    <loan-calculator [principal]="5000"></loan-calculator>
  `
})
export class AppComponent {}
