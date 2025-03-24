// src/app/signup/signup.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceMock = {
      signup: jasmine.createSpy('signup').and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, SignupComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.signup on form submit', () => {
    component.email = 'test@example.com';
    component.name = 'Test User'; // Added name field
    component.password = 'password';
    spyOn(router, 'navigate');
    component.onSignup();
    expect(authService.signup).toHaveBeenCalledWith({ email: 'test@example.com', name: 'Test User', password: 'password' });
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});