// src/app/postcode-finder/postcode-finder.ts
import { Component }        from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { AppStateService }  from '../app-state.service';

@Component({
  selector: 'app-postcode-finder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postcode-finder.html',
  styleUrls: ['./postcode-finder.css']
})
export class PostcodeFinderComponent {
  postcode: string = '';

  constructor(private store: AppStateService) {}

  lookupPostcode() {
    if (this.postcode.trim()) {
      // Push the postcode into the shared state
      this.store.setPostcode(this.postcode.trim());
    }
  }
}
