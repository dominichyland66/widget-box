// src/app/user-details/user-details.ts
import { Component }          from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { AppStateService }    from '../app-state.service';

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

  constructor(private store: AppStateService) {}

  submit() {
    if (this.name && this.age != null) {
      // Push the updated user details into the shared state
      this.store.setUserDetails({ name: this.name, age: this.age });
    }
  }
}
