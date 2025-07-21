import { enableProdMode, Injector }   from '@angular/core';
import { platformBrowserDynamic }     from '@angular/platform-browser-dynamic';
import { createCustomElement }        from '@angular/elements';
import { WidgetsModule }              from './app/widgets.module';

import { PostcodeFinderComponent }    from './app/postcode-finder/postcode-finder';
import { LoanCalculatorComponent }    from './app/loan-calculator/loan-calculator.component';
import { HomePageComponent }          from './app/home-page/home-page';
import { UserDetailsComponent }       from './app/user-details/user-details';
import { ProductPickerComponent }     from './app/product-picker/product-picker';
import { TermsBoxComponent }          from './app/terms-box/terms-box';
import { SecondPageComponent }        from './app/second-page/second-page';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(WidgetsModule)
  .then(moduleRef => {
    const injector = moduleRef.injector;

    const mappings: [string, any][] = [
      ['app-postcode-finder', PostcodeFinderComponent],
      ['loan-calculator', LoanCalculatorComponent],
      ['app-home-page', HomePageComponent],
      ['app-user-details', UserDetailsComponent],
      ['app-product-picker', ProductPickerComponent],
      ['app-terms-box', TermsBoxComponent],
      ['app-second-page', SecondPageComponent],
    ];

    for (const [selector, comp] of mappings) {
      const el = createCustomElement(comp, { injector });
      customElements.define(selector, el);
    }
  })
  .catch(err => console.error(err));
