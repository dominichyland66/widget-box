// src/app/product-picker/product-picker.ts
import { Component }          from '@angular/core';
import { CommonModule }       from '@angular/common';
import { AppStateService }    from '../app-state.service';

@Component({
  selector: 'app-product-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-picker.html',
  styleUrls: ['./product-picker.css']
})
export class ProductPickerComponent {
  selectedTerm: string = '';
  products = ['Basic', 'Premium', 'Enterprise'];

  constructor(private store: AppStateService) {}

  selectTerm(term: string) {
    this.selectedTerm = term;
    // Push the selection into the shared state
    this.store.setSelectedProduct(term);
  }
}
