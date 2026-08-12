import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

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

    this.authService.register({
      firstName: this.firstName(),
      lastName: this.lastName(),
      email: this.email(),
      password: this.password(),
      role: this.role(),
    }).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error.set(err.error?.message || 'Greška pri registraciji');
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
