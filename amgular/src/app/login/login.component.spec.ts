// src/app/login/login.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceMock = {
      login: jasmine.createSpy('login').and.returnValue(of(true))
    };

    await TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authService.login on form submit', () => {
    component.email = 'test@example.com';
    component.password = 'password';
    spyOn(router, 'navigate');
    component.onLogin();
    expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password');
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});