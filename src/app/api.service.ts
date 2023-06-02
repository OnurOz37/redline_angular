import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    protectedHeaders() {
        const token = this.authService.getAccessToken();
        if(token) {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
        } else {
            console.error("Access token not available");
            return null;
        }
    }
}