import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {AuthService} from "./modules/general/signin/auth.service";

@Injectable()
export class ApiserviceService {
    constructor(private http: HttpClient, private authService: AuthService) { }

    protectedHeaders() {
        const token = this.authService.getAccessToken();
        console.log("token : " + token)
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