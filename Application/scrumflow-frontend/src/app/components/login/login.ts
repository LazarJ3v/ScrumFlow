import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

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

    this.authService.login(this.email(), this.password()).subscribe({
      next: (response) => {
        console.log('Uspesno ulogovan:', response);
        this.router.navigate(['/board']);
      },
      error: (err) => {
        this.error.set('Pogrešan email ili lozinka');
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }
}
