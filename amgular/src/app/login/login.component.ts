// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    console.log('Login button clicked', this.email, this.password); // Add this for debugging
    this.authService.login(this.email, this.password).subscribe({
      next: (success) => {
        if (success) {
          console.log('Login successful, navigating to dashboard'); // Debug
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Login failed'); // Debug
          alert('Invalid credentials');
        }
      },
      error: (err) => {
        console.error('Login error:', err); // Debug
        alert('An error occurred during login');
      }
    });
  }
}