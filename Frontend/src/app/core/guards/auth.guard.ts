import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.isAuthenticated$.pipe(
    take(1),
    map(isAuthenticated => {
      if (isAuthenticated && (state.url === '/auth/login' || state.url === '/auth/signup')) {
        // If user is authenticated and trying to access login/signup, redirect to dashboard
        const userRole = authService.getUserRole();
        if (userRole) {
          router.navigate([`/${userRole.toLowerCase()}`]);
        } else {
          router.navigate(['/']);
        }
        return false;
      } else if (!isAuthenticated && !(state.url === '/auth/login' || state.url === '/auth/signup')) {
        // If user is not authenticated and trying to access protected routes, redirect to login
        router.navigate(['/auth/login']);
        return false;
      }
      return true;
    })
  );
};
