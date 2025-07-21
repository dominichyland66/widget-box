import { Component, Input } from '@angular/core';
import { CommonModule      } from '@angular/common';
import { FormsModule       } from '@angular/forms';

@Component({
  selector: 'loan-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loan-calculator.component.html',
  styleUrls:   ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  @Input() principal = 0;
  readonly annualRate  = 6;    // percent per annum
  readonly installments = 10;   // number of payments

  monthlyPayment = 0;
  totalPaid      = 0;
  totalInterest  = 0;

  calculate(): void {
    const P = this.principal;
    const r = this.annualRate / 100 / 12;
    const n = this.installments;

    this.monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
    this.totalPaid      = this.monthlyPayment * n;
    this.totalInterest  = this.totalPaid - P;
  }
}
