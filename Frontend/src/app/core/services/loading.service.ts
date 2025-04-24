import { Injectable, InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOADING_SERVICE = new InjectionToken<LoadingService>('LoadingService');

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show(): void {
    this.loadingSubject.next(true);
  }

  hide(): void {
    this.loadingSubject.next(false);
  }
} 