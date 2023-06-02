import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth.service";
import {ApiService} from "../../../api.service";

@Injectable()
export class SallesService {
    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) {
    }

    getSalles() {
        const headers = this.apiService.protectedHeaders();
        if(headers) {
            return this.http.get('/api/salle/get', {headers});
        } else {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }
    }
}