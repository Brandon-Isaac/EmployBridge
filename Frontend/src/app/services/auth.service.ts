import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Initialize with stored user data if available
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  hasRole(requiredRole: string): boolean {
    const user = this.currentUserSubject.value;
    return user?.role === requiredRole;
  }

  login(userData: any): void {
    this.currentUserSubject.next(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  logout(): void {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }
} 