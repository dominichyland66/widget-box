// src/elements.module.ts
import { NgModule, Injector }      from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { createCustomElement }     from '@angular/elements';

import { TermsBoxComponent }       from './app/terms-box/terms-box.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ TermsBoxComponent ],
  // Angular Elements needs entryComponents in View‑Engine apps;
  // with Ivy it's optional but harmless.
  entryComponents: [ TermsBoxComponent ]
})
export class ElementsModule {
  constructor(private injector: Injector) {
    // register <app-terms-box> as a native custom element
    const el = createCustomElement(TermsBoxComponent, { injector });
    customElements.define('app-terms-box', el);
  }
  // we never bootstrap a “root” component here
  ngDoBootstrap() {}
}
