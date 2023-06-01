import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiserviceService} from "../../../apiservice.service";

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private apiService: ApiserviceService) {}

    createUser(userData: Object) {
        const headers = this.apiService.protectedHeaders();
        if(headers) {
        return this.http.post('/api/utilisateur/add',userData,{headers});
        } else {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }
    }
}
