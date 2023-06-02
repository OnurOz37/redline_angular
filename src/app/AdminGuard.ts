import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        const role = this.authService.getRole();

        if (role === 'ROLE_ADMIN') {
            return true;
        } else {
            // Rediriger vers une page d'erreur d'autorisation ou autre
            this.router.navigate(['/home']);
            return false;
        }
    }
}
