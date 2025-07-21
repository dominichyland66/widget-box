import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-picker.html',
  styleUrls: ['./product-picker.css']
})
export class ProductPickerComponent {
  selectedTerm: string = '';

  selectTerm(term: string) {
    this.selectedTerm = term;
  }
}

