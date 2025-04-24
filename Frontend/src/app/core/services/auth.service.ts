import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserRole } from '../models/user-role.enum';

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

  constructor(private http: HttpClient) {
    const storedUser = sessionStorage.getItem(this.USER_KEY);
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string, userType: string): Observable<any> {
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
      })
    );
  }

  register(userData: any, userType: string): Observable<any> {
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
      })
    );
  }

  private setAuthData(token: string, user: User): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  logout(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  hasRole(role: UserRole): boolean {
    return this.currentUserSubject.value?.role === role;
  }
}
