import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRole } from '../models/user-role.enum';
import { LoadingService, LOADING_SERVICE } from './loading.service';

interface User {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'current_user';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userRoleSubject = new BehaviorSubject<string | null>(null);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  userRole$ = this.userRoleSubject.asObservable();

  constructor(
    private http: HttpClient,
    @Inject(LOADING_SERVICE) private loadingService: LoadingService
  ) {
    const storedUser = sessionStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
    // Initialize auth state from localStorage
    const token = localStorage.getItem(this.TOKEN_KEY);
    const role = localStorage.getItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(!!token);
    this.userRoleSubject.next(role);
  }

  login(email: string, password: string, userType: string): Observable<any> {
    this.loadingService.show();
    let endpoint = '';
    switch (userType.toLowerCase()) {
      case 'jobseeker':
        endpoint = 'job-seekers/login';
        break;
      case 'employer':
        endpoint = 'employers/login';
        break;
      case 'admin':
        endpoint = 'admin/login';
        break;
      default:
        throw new Error('Invalid user type');
    }
    return this.http.post(`${environment.apiUrl}/${endpoint}`, { email, password }).pipe(
      tap((response: any) => {
        this.setAuthData(response.token, response.user);
        this.loadingService.hide();
      }),
      catchError(error => {
        this.loadingService.hide();
        throw error;
      })
    );
  }

  register(userData: any, userType: string): Observable<any> {
    this.loadingService.show();
    let endpoint = '';
    switch (userType.toLowerCase()) {
      case 'jobseeker':
        endpoint = 'job-seekers/register';
        break;
      case 'employer':
        endpoint = 'employers/register';
        break;
      default:
        throw new Error('Invalid user type for registration');
    }
    return this.http.post(`${environment.apiUrl}/${endpoint}`, userData).pipe(
      tap((response: any) => {
        this.setAuthData(response.token, response.user);
        this.loadingService.hide();
      }),
      catchError(error => {
        this.loadingService.hide();
        throw error;
      })
    );
  }

  private setAuthData(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, user.role);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
    this.userRoleSubject.next(user.role);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.userRoleSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserSubject.value?.role === role;
  }
}
