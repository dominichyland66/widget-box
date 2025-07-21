// src/app/app.config.ts
import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter }  from '@angular/router';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';      // ← NEW

import { routes }        from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // ← add CommonModule + FormsModule so standalone components can use ngModel
    importProvidersFrom(CommonModule, FormsModule)
  ]
};
