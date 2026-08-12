import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = signal('');
  password = signal('');
  showPassword = signal(false);

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  onSubmit() {
    console.log('Login:', this.email(), this.password());
  }
}
