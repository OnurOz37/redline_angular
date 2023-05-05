import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiserviceService {
    constructor(private _http: HttpClient) { }

    getdata(){
        return this._http.get("/v1/"+"http://localhost:8080/api/site/get")
    }
}