// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private loggedInUser: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  signup(user: any): Observable<any> {
    console.log('Sending signup request to:', this.apiUrl, 'with data:', user);
    return this.http.post(this.apiUrl, user).pipe(
      catchError((err) => {
        console.error('Signup HTTP error:', err);
        throw err; // Re-throw the error so the component can handle it
      })
    );
  }

  login(email: string, password: string): Observable<boolean> {
    console.log('Sending login request:', email, password);
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        console.log('Login response:', users);
        if (users.length > 0) {
          this.loggedInUser = users[0];
          localStorage.setItem('currentUser', JSON.stringify(this.loggedInUser));
          return true;
        }
        return false;
      }),
      catchError((err) => {
        console.error('Login error:', err);
        return of(false);
      })
    );
  }

  logout(): void {
    console.log('Logging out user'); // Merged debug logging
    this.loggedInUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']).then(success => {
      if (!success) {
        console.error('Navigation to login failed');
      }
    }).catch(err => {
      console.error('Navigation error:', err);
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}