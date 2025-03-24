// src/app/signup/signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  name: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup(): void {
    console.log('Signup button clicked', this.email, this.name, this.password); // Add this for debugging
    const user = { email: this.email, name: this.name, password: this.password };
    this.authService.signup(user).subscribe({
      next: () => {
        console.log('Signup successful, navigating to login'); // Debug
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup error:', err); // Debug
        alert('An error occurred during signup');
      }
    });
  }
}