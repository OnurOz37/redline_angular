import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SigninService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    login(username: string, password: string) {
        return this.http.post("/login", { username, password }, { observe: 'response' }).pipe(
            tap(response => {
                const accessToken = response.headers.get('Authorization');
                console.log('Response from API:', response);
                console.log('Access token:', accessToken);
                if (accessToken) {
                    const bearerToken = accessToken.replace('Bearer ', '');
                    this.authService.setAccessToken(bearerToken);
                } else {
                    console.error('Bearer token not found in response headers');
                }
                return response.body;
            })
        );
    }
}
