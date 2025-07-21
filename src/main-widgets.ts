// src/main-widgets.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

import 'zone.js'; // safety: ensure Zone gets bundled

// If TermsBoxComponent template uses forms bindings (ngModel, etc.), also:
// import { FormsModule } from '@angular/forms';

import { TermsBoxComponent } from './app/terms-box/terms-box'; 
// ^ adjust if your file is actually terms-box.component.ts

bootstrapApplication(TermsBoxComponent, {
  providers: [
    importProvidersFrom(CommonModule)
    // , importProvidersFrom(FormsModule) // uncomment if needed
  ]
}).then(appRef => {
  const el = createCustomElement(TermsBoxComponent, { injector: appRef.injector });
  if (!customElements.get('app-terms-box')) {
    customElements.define('app-terms-box', el);
  }
}).catch(err => console.error(err));
