import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth.service";
import {ApiService} from "../../../api.service";

@Injectable()
export class SitesService {
    constructor(private http: HttpClient, private authService: AuthService, private apiService: ApiService) {

    }

    getSites() {
        const headers = this.apiService.protectedHeaders();
        if (headers) {
            return this.http.get('/api/site/get', {headers});
        } else {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }
    }

    addSite(site: Object) {
        const headers = this.apiService.protectedHeaders();
        if (!headers) {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }

        const siteJson = JSON.stringify(site);
        return this.http.post('/api/site/add', siteJson, {headers});
    }
}
