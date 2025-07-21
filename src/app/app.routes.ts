import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page';
import { SecondPageComponent } from './second-page/second-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'second', component: SecondPageComponent }
];

