import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleType } from '../models/vehicle-type';

@Injectable({
  providedIn: 'root'
})
export class VehicleInfoService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  fetchAllVehicleTypes(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(this.baseUrl + 'VehicleTypes');
  }
}
