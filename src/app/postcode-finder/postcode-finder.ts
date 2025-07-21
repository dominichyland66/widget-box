import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postcode-finder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postcode-finder.html',
  styleUrls: ['./postcode-finder.css']
})
export class PostcodeFinderComponent {
  postcode: string = '';

  lookupPostcode() {
    alert(`Looking up: ${this.postcode}`);
  }
}


