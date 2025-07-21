// src/main-widgets.ts

import { enableProdMode, Injector, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic }               from '@angular/platform-browser-dynamic';
import { createCustomElement }                  from '@angular/elements';
import { WidgetsModule }                        from './app/widgets.module';

import { PostcodeFinderComponent }  from './app/postcode-finder/postcode-finder';
import { LoanCalculatorComponent }  from './app/loan-calculator/loan-calculator.component';
import { UserDetailsComponent }     from './app/user-details/user-details';
import { ProductPickerComponent }   from './app/product-picker/product-picker';
import { TermsBoxComponent }        from './app/terms-box/terms-box';

console.log('🛠 main-widgets.ts loading…');

// always run production mode for smaller bundle & no dev checks
enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(WidgetsModule)
  .then((moduleRef: NgModuleRef<WidgetsModule>) => {
    console.log('✔️ WidgetsModule bootstrapped');
    const injector: Injector = moduleRef.injector;

    const mappings: Array<[string, any]> = [
      ['app-postcode-finder', PostcodeFinderComponent],
      ['loan-calculator',     LoanCalculatorComponent],
      ['app-user-details',    UserDetailsComponent],
      ['app-product-picker',  ProductPickerComponent],
      ['app-terms-box',       TermsBoxComponent]
    ];

    for (const [selector, component] of mappings) {
      console.log(`👉 Defining element <${selector}>`);
      const el = createCustomElement(component, { injector });
      customElements.define(selector, el);
    }
  })
  .catch((err: any) =>
    console.error('❌ Error bootstrapping WidgetsModule:', err)
  );
