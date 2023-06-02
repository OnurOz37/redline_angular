import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from '../../../auth.service';
import { tap } from "rxjs";
import jwtDecode from "jwt-decode";




@Injectable({
    providedIn: 'root'
})
export class SigninService {
    constructor(private http: HttpClient, private authService: AuthService) {}
    login(username: string, password: string) {
        return this.http.post("/login", { username, password }, { observe: 'response' }).pipe(
            tap(response => {
                const accessToken = response.headers.get('Authorization');
                if (accessToken) {
                    const bearerToken = accessToken.replace('Bearer ', '');
                    this.authService.setAccessToken(bearerToken);

                    // Déchiffrer le token JWT pour accéder aux informations
                    const decodedToken = jwtDecode(bearerToken);
                    console.log(decodedToken);
                    // @ts-ignore
                    const role = decodedToken.auth;
                    // @ts-ignore
                    const user = decodedToken.sub;

                    this.authService.setUser(user);
                    this.authService.setRole(role);

                } else {
                    console.error('Bearer token not found in response headers');
                }
                return response.body;
            })
        );
    }
}
