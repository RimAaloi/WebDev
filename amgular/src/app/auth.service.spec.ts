// src/app/auth.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should signup a user', () => {
    const user = { email: 'test@example.com', name: 'Test User', password: 'password' }; // Added name field
    service.signup(user).subscribe(response => {
      expect(response).toEqual(user);
    });

    const req = httpMock.expectOne('http://localhost:3000/users');
    expect(req.request.method).toBe('POST');
    req.flush(user);
  });

  it('should login a user', () => {
    const user = [{ email: 'test@example.com', password: 'password' }];
    service.login('test@example.com', 'password').subscribe(success => {
      expect(success).toBeTrue();
    });

    const req = httpMock.expectOne('http://localhost:3000/users?email=test@example.com&password=password');
    expect(req.request.method).toBe('GET');
    req.flush(user);
  });

  it('should logout a user', () => {
    service.logout();
    expect(service.isLoggedIn()).toBeFalse();
  });
});