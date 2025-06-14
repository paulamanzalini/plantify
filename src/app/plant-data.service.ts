import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plant } from './plant-list/Plant';

const URL = 'https://684d7c1d65ed0871391640a7.mockapi.io/api/plantify/plants';

@Injectable({
  providedIn: 'root',
})
export class PlantDataService {
  constructor(private http: HttpClient) {}

  /* consume la API de plantas (url) y devuelve un observable a la respuesta */

  public getAll(): Observable<Plant[]> {
    return this.http.get<Plant[]>(URL);
  }

}
