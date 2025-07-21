import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule }                     from '@angular/platform-browser';
import { FormsModule }                       from '@angular/forms';
import { HttpClientModule }                  from '@angular/common/http';

import { PostcodeFinderComponent } from './postcode-finder/postcode-finder';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { UserDetailsComponent }    from './user-details/user-details';
import { ProductPickerComponent }  from './product-picker/product-picker';
import { TermsBoxComponent }       from './terms-box/terms-box';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // Standalone components—import, don’t declare:
    PostcodeFinderComponent,
    LoanCalculatorComponent,
    UserDetailsComponent,
    ProductPickerComponent,
    TermsBoxComponent
  ]
})
export class WidgetsModule implements DoBootstrap {
  // This prevents NG0403: no bootstrap array AND no ngDoBootstrap
  ngDoBootstrap(appRef: ApplicationRef): void {
    // no-op: we’re not bootstrapping any component here
  }
}
