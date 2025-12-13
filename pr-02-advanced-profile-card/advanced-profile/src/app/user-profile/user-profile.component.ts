import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './user.interface';
import { UserStatus } from './user-status.enum';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule]
})
export class UserProfileComponent {

  user: User = {
    id: 12,
    name: 'Alex Johnson',
    status: UserStatus.Pending,
    address: {
      city: 'Lviv',
      street: 'Freedom Avenue 45'
    },
    hobbies: ['Football', 'Reading', 'Photography', 'Hiking']
  };

  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}
