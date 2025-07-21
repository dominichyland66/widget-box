import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ← ADD THIS
import { UserDetailsComponent } from '../user-details/user-details';
import { PostcodeFinderComponent } from '../postcode-finder/postcode-finder';
import { ProductPickerComponent } from '../product-picker/product-picker';
import { TermsBoxComponent } from '../terms-box/terms-box';
import { LoanCalculatorComponent } from '../loan-calculator/loan-calculator.component';

@Component({
  selector: 'app-second-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // ← ADD THIS TOO
    UserDetailsComponent,
    PostcodeFinderComponent,
    ProductPickerComponent,
    LoanCalculatorComponent,
    TermsBoxComponent
  ],
  templateUrl: './second-page.html',
  styleUrls: ['./second-page.css']
})
export class SecondPageComponent { }
