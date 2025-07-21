import { Component, signal } from '@angular/core';
import { PostcodeFinderComponent } from '../postcode-finder/postcode-finder';
import { TermsBoxComponent } from '../terms-box/terms-box';
import { UserDetailsComponent } from '../user-details/user-details';
import { ProductPickerComponent } from '../product-picker/product-picker';
import { RouterModule } from '@angular/router';
import { LoanCalculatorComponent } from '../loan-calculator/loan-calculator.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterModule,
    PostcodeFinderComponent,
    TermsBoxComponent,
    UserDetailsComponent,
    ProductPickerComponent,
    LoanCalculatorComponent
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css']
})
export class HomePageComponent {
  protected readonly title = signal('widget-box');
}
