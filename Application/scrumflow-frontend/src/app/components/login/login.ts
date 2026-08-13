import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthAction from "../../store/auth/auth.actions"

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private store = inject(Store);

  email = signal('');
  password = signal('');
  showPassword = signal(false);
  isLoading = signal(false);
  error = signal('');

  togglePassword() {
    this.showPassword.set(!this.showPassword());
  }

  onSubmit() {
    this.isLoading.set(true);
    this.error.set('');

    this.store.dispatch(AuthAction.login({ email: this.email(), password: this.password() }))
  }
}
