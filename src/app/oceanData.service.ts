import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/api/';

  constructor(private http: HttpClient) { }

  getOceanData(params: any): Observable<any> {
    let queryParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        queryParams = queryParams.append(key, params[key]);
      }
    }
    return this.http.get(this.apiUrl + 'OceanData', { params: queryParams });
  }
}
