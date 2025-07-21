// src/main-terms.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ElementsModule }         from './elements.module';

platformBrowserDynamic()
  .bootstrapModule(ElementsModule)
  .catch(err => console.error(err));
