import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OceanData } from './interfaces/interfaces'; // Importar a interface OceanData

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/swagger/v1/swagger.json';

  constructor(private http: HttpClient) {}

  getOceanData(filters: any): Observable<OceanData[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
      }
    }
    return this.http.get<OceanData[]>(this.apiUrl, { params });
  }
}
