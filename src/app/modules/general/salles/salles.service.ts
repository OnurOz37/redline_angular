import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../signin/auth.service";
import {ApiserviceService} from "../../../apiservice.service";

@Injectable()
export class SallesService {
    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiserviceService) {
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