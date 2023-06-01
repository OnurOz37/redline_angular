import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "./modules/general/signin/auth.service";

@Injectable()
export class ApiserviceService {
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