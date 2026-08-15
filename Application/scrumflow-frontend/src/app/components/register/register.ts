import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as AuthAction from "../../store/auth/auth.actions";

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private store = inject(Store);

  firstName = signal('');
  lastName = signal('');
  email = signal('');
  password = signal('');
  confirmPassword = signal('');
  role = signal('DEVELOPER');
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isLoading = signal(false);
  error = signal('');

  roles = [
    { value: 'PRODUCT_OWNER', label: 'Product Owner' },
    { value: 'SCRUM_MASTER', label: 'Scrum Master' },
    { value: 'DEVELOPER', label: 'Developer' },
    { value: 'CLIENT', label: 'Client' },
  ];

  togglePassword() { this.showPassword.set(!this.showPassword()); }
  toggleConfirmPassword() { this.showConfirmPassword.set(!this.showConfirmPassword()); }

  onSubmit() {
    if (this.password() !== this.confirmPassword()) {
      this.error.set('Lozinke se ne poklapaju');
      return;
    }

    this.isLoading.set(true);
    this.error.set('');

    this.store.dispatch(AuthAction.register({
      firstName: this.firstName(),
      lastName: this.lastName(),
      email: this.email(),
      role: this.role(),
      password: this.password()
    }))
  }
}