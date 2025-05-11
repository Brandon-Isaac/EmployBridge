import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Company {
    id: string;
    name: string;
    description: string;
    industry: string;
    location: string;
    website?: string;
    logo?: string;
    employeeCount: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CompanyProfile {
    company: {
        name: string;
        description: string;
        industry: string;
        location: string;
        website?: string;
        logo?: string;
        employeeCount: number;
        employees: any[];
    };
    jobs: any[];
}

export interface CreateCompanyData {
    name: string;
    description: string;
    industry: string;
    location: string;
    website?: string;
    logo?: string;
}

export interface UpdateCompanyData {
    name?: string;
    description?: string;
    industry?: string;
    location?: string;
    website?: string;
    logo?: string;
}

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private apiUrl = `${environment.apiUrl}/companies`;

    constructor(private http: HttpClient) {}

    createCompany(data: CreateCompanyData): Observable<Company> {
        return this.http.post<Company>(this.apiUrl, data);
    }

    updateCompany(id: string, data: UpdateCompanyData): Observable<Company> {
        return this.http.put<Company>(`${this.apiUrl}/${id}`, data);
    }

    deleteCompany(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    getCompanyById(id: string): Observable<Company> {
        return this.http.get<Company>(`${this.apiUrl}/${id}`);
    }

    getCompanyEmployees(id: string): Observable<{ employeeCount: number; employees: any[] }> {
        return this.http.get<{ employeeCount: number; employees: any[] }>(`${this.apiUrl}/${id}/employees`);
    }

    getCompanyJobs(id: string): Observable<{ jobCount: number; jobs: any[] }> {
        return this.http.get<{ jobCount: number; jobs: any[] }>(`${this.apiUrl}/${id}/jobs`);
    }

    getCompanyProfile(id: string): Observable<CompanyProfile> {
        return this.http.get<CompanyProfile>(`${this.apiUrl}/${id}/profile`);
    }

    getCompanyByUserId(userId: string): Observable<Company> {
        return this.http.get<Company>(`${this.apiUrl}/user/${userId}`);
    }

    // Helper method to format date
    formatDate(date: Date): string {
        return new Date(date).toLocaleDateString();
    }

    // Helper method to get industry icon
    getIndustryIcon(industry: string): string {
        const icons: { [key: string]: string } = {
            'Technology': 'computer',
            'Healthcare': 'local_hospital',
            'Finance': 'account_balance',
            'Education': 'school',
            'Manufacturing': 'factory',
            'Retail': 'store',
            'Other': 'business'
        };
        return icons[industry] || icons['Other'];
    }
} 