import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './auth.service';
import { environment } from '../../environments/environment'; 

export interface UpdateProfileData {
  name?: string;
  email?: string;
  position?: string;
}

export interface UpdatePasswordData {
  currentPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  // Get user profile
  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile`);
  }

  // Update user profile
  updateProfile(data: UpdateProfileData): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/profile`, data);
  }

  // Update user password
  updatePassword(data: UpdatePasswordData): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.apiUrl}/profile/password`, data);
  }

  // Delete user account
  deleteAccount(): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/profile`);
  }

  // Admin: Get all users
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Admin: Get user by ID
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  // Admin: Update user role
  updateUserRole(userId: string, role: 'user' | 'employer' | 'admin'): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/profile/role`, { userId, role });
  }
} 