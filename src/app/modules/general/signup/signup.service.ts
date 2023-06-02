import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from "../../../api.service";

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private apiService: ApiService) {}

    createUser(userData: Object) {
        const headers = this.apiService.protectedHeaders();
        if(headers) {
        return this.http.post('/api/utilisateur/add',userData,{headers});
        } else {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }
    }
}
