import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private accessTokenKey = 'token';

    constructor() {}

    setAccessToken(accessToken: string): void {
        localStorage.setItem(this.accessTokenKey, accessToken);
    }

    getAccessToken(): string | null {
        return localStorage.getItem(this.accessTokenKey);
    }

    isAuthenticated(): boolean {
        return this.getAccessToken() !== null;
    }

    getAuthorizationHeader(): string | null {
        const accessToken = this.getAccessToken();
        if (accessToken) {
            return `Bearer ${accessToken}`;
        }
        return null;
    }

    removeAccessToken(): void {
        localStorage.removeItem(this.accessTokenKey);
    }

    logout(): void {
        this.removeAccessToken();
        // Autres opérations de nettoyage ou de réinitialisation de l'état de l'application
    }
}
