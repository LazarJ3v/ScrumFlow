import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  firstName = signal<string>('');
  lastName = signal<string>('');
  email = signal<string>('');
  avatar = signal<string>('');
  isActive = signal<boolean>(false);
  role = signal<string>('');
}
