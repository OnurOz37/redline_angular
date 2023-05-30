import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loginUrl = 'http://localhost:8080';
    constructor(private http: HttpClient) { }
    login(username: string, password: string) {
        return this.http.get("/api/site/get");
    }
}