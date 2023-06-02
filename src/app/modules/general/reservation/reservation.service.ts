import {Injectable} from "@angular/core";
import {ApiService} from "../../../api.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ReservationService {

    constructor(private apiService: ApiService, private http: HttpClient) {
    }

    rechercher(date: Date, creneau: number) {
        const headers = this.apiService.protectedHeaders();
        if (!headers) {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }

        const params = new URLSearchParams();
        const dateStr = this.formatDate(date)
        params.set("date", dateStr)
        params.set("creneau", String(creneau))

        return this.http.get('/api/salle/rechercher?' + params.toString(), {headers})
    }

    reserver(idSalle: number, date: Date, creneau: number) {
        const headers = this.apiService.protectedHeaders();
        if (!headers) {
            throw new Error("Les en-têtes d'authentification ne sont pas disponible")
        }

        return this.http.post('/api/salle/get/' + idSalle + '/reserver', {date: this.formatDate2(date), creneau: creneau}, {headers})
    }

    private formatDate(date: Date) {
        return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    }

    private formatDate2(date: Date) {
        return date.getFullYear() + "-" + ('0' + (date.getMonth() + 1)).slice(-2) + "-" +  ("0" + date.getDate()).slice(-2);
    }
}
