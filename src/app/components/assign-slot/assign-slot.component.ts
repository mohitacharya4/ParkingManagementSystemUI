import { Component } from '@angular/core';
import { ParkingSlotService } from '../../core/services/parking-slot.service';
import { VehicleType } from '../../core/models/vehicle-type';
import { ParkingSlot } from '../../core/models/parking-slot';
import { VehicleInfoService } from '../../core/services/vehicle-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-slot',
  templateUrl: './assign-slot.component.html',
  styleUrl: './assign-slot.component.css',
})
export class AssignSlotComponent {
  vehicleTypes: VehicleType[] = [];
  selectedVehicleType: VehicleType | null = null;
  assignedSlot: ParkingSlot | null = null;
  registrationNumber: string = '';

  constructor(
    private parkingSlotService: ParkingSlotService,
    private vehicleInfoService: VehicleInfoService,
    private router: Router
  ) {
    this.fetchAllVehicleTypes();
  }

  ngOnInit() {}

  assignSlot() {
    console.log('slot assigned');
    console.log(this.registrationNumber);
    console.log(this.selectedVehicleType);
    if (!this.selectedVehicleType) {
      alert('Please select a valid vehicle type');
      return;
    }
    if (!this.registrationNumber) {
      alert("Registration Number can't be empty");
      return;
    }

    this.parkingSlotService
      .assignSlot(
        this.selectedVehicleType.toString(),
        this.registrationNumber
      )
      .subscribe((response) => {
        if (response.slotNumber === -1) {
          alert(`Sorry, no slots available. Try again in sometime!`);
        }
        else {
          alert(`Please park your vehicle at ${response.slotNumber}`);
        }
        this.router.navigate(['/parking-slot-list']);
      });
  }

  fetchAllVehicleTypes() {
    this.vehicleInfoService.fetchAllVehicleTypes().subscribe((vehicleTypes) => {
      this.vehicleTypes = vehicleTypes;
    });
  }
}
