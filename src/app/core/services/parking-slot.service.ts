import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ParkingSlot } from '../models/parking-slot';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SlotType } from '../enums/slot-type';
import { VehicleType } from '../models/vehicle-type';
import { ParkingSlotAssignment } from '../models/parking-slot.assignment';

@Injectable({
  providedIn: 'root',
})
export class ParkingSlotService {
  baseUrl = environment.apiUrl;

  slotTypeToString = (slotTypeNumber: number): string => {
    switch (slotTypeNumber) {
      case 0:
        return SlotType.Small;
      case 1:
        return SlotType.Medium;
      case 2:
        return SlotType.Large;
      default:
        return 'Unknown';
    }
  };

  constructor(private http: HttpClient) {}

  fetchAllSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(this.baseUrl + 'parkingslots').pipe(
      map((slots) =>
        slots.map((slot) => ({
          ...slot,
          slotType: this.slotTypeToString(+slot.slotType),
        }))
      )
    );
  }

  assignSlot(selectedVehicleType?: string | null, registrationNumber?: string) : Observable<ParkingSlotAssignment> {
    const requestBody = { vehicleType: selectedVehicleType, vehicleRegistrationNumber: registrationNumber };
    
    return this.http.post<ParkingSlotAssignment>(this.baseUrl + 'parkingslots/assign', requestBody);
  }
}
