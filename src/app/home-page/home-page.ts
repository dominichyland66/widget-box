// src/app/home-page/home-page.ts

import { Component, signal }        from '@angular/core';
import { RouterModule }             from '@angular/router';

import { PostcodeFinderComponent }  from '../postcode-finder/postcode-finder';
import { TermsBoxComponent }        from '../terms-box/terms-box';
import { UserDetailsComponent }     from '../user-details/user-details';
import { ProductPickerComponent }   from '../product-picker/product-picker';
import { LoanCalculatorComponent }  from '../loan-calculator/loan-calculator.component';
import { AppSummaryComponent }      from '../app-summary';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterModule,
    PostcodeFinderComponent,
    TermsBoxComponent,
    UserDetailsComponent,
    ProductPickerComponent,
    LoanCalculatorComponent,
    AppSummaryComponent     
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent {
  protected readonly title = signal('widget-box');
}
