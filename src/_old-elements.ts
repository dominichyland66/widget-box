import { Injector }                             from '@angular/core';
import { createCustomElement }                  from '@angular/elements';
import { AppModule }                            from './app/app.module';
import { UserDetailsComponent }                 from './app/user‑details.component';
import { PostcodeFinderComponent }              from './app/postcode‑finder.component';
import { ProductPickerComponent }               from './app/product‑picker.component';
import { TermsBoxComponent }                    from './app/terms‑box.component';
import { platformBrowser }                      from '@angular/platform-browser';
import { BrowserModule }                        from '@angular/platform-browser';

// 1) Create a *platform injector* for Elements.
//    We don’t bootstrap AppModule here, we just grab its Injector.
const platform = platformBrowser();
const injector = platform.injector;

// 2) Turn each Component into a custom element:
const UserDetailsEl     = createCustomElement(UserDetailsComponent,     { injector });
const PostcodeFinderEl  = createCustomElement(PostcodeFinderComponent,  { injector });
const ProductPickerEl   = createCustomElement(ProductPickerComponent,   { injector });
const TermsBoxEl        = createCustomElement(TermsBoxComponent,        { injector });

// 3) Define the tags.  These names must match your `selector:` in @Component:
customElements.define('app-user-details',    UserDetailsEl);
customElements.define('app-postcode-finder', PostcodeFinderEl);
customElements.define('app-product-picker',  ProductPickerEl);
customElements.define('app-terms-box',       TermsBoxEl);

// 4) (Optionally) export a function so you can control when this runs:
export function defineCustomElements() {
  // nothing more to do—this file already called define()
}
