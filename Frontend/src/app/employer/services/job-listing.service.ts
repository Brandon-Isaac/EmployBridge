import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  status: string;
  applicants: number;
  posted: string;
  description?: string;
  requirements?: string[];
  salary?: string;
  companyId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobListingService {
  private apiUrl = `${environment.apiUrl}/jobs`;

  constructor(private http: HttpClient) {}

  getActiveListings(): Observable<JobListing[]> {
    return this.http.get<JobListing[]>(`${this.apiUrl}/active`);
  }

  createListing(listing: Partial<JobListing>): Observable<JobListing> {
    return this.http.post<JobListing>(this.apiUrl, listing);
  }

  updateListing(id: string, listing: Partial<JobListing>): Observable<JobListing> {
    return this.http.put<JobListing>(`${this.apiUrl}/${id}`, listing);
  }

  deleteListing(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getListingById(id: string): Observable<JobListing> {
    return this.http.get<JobListing>(`${this.apiUrl}/${id}`);
  }
} 