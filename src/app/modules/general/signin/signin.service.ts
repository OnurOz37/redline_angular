import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import {tap} from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SigninService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    login(username: string, password: string) {
        return this.http.post("/login", { username, password }).pipe(
            tap((response: any) => {
                console.log("hello");
                console.log(response)
                const accessToken = response.accessToken;
                console.log(accessToken);
                console.log("hello2");
                this.authService.setAccessToken(accessToken);
                console.log("hello3");
            })
        );
    }
}
