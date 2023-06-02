import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private accessTokenKey = 'token';
    private userKey = 'user';
    private roleKey = 'role';

    constructor() {}

    setAccessToken(accessToken: string): void {
        localStorage.setItem(this.accessTokenKey, accessToken);
    }

    getAccessToken(): string | null {
        return localStorage.getItem(this.accessTokenKey);
    }

    setUser(user: string): void {
        localStorage.setItem(this.userKey, user);
    }

    getUser(): string | null {
        return localStorage.getItem(this.userKey);
    }

    setRole(role: string): void {
        localStorage.setItem(this.roleKey, role);
    }

    getRole(): string | null {
        return localStorage.getItem(this.roleKey);
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

    removeUser(): void {
        localStorage.removeItem(this.userKey);
    }

    removeRole(): void {
        localStorage.removeItem(this.roleKey);
    }

    logout(): void {
        this.removeAccessToken();
        this.removeUser();
        this.removeRole();
        // Autres opérations de nettoyage ou de réinitialisation de l'état de l'application
    }
}
