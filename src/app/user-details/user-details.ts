import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.css']
})
export class UserDetailsComponent {
  name: string = '';
  age: number | null = null;

  submit() {
    alert(`Name: ${this.name}, Age: ${this.age}`);
  }
}
