import { Component } from '@angular/core';
import { ParkingSlotService } from '../../core/services/parking-slot.service';
import { ParkingSlot } from '../../core/models/parking-slot';

@Component({
  selector: 'app-parking-slot-list',
  templateUrl: './parking-slot-list.component.html',
  styleUrl: './parking-slot-list.component.css'
})
export class ParkingSlotListComponent {
  parkingSlots: ParkingSlot[] = [];

  constructor(private parkingSlotService: ParkingSlotService) {}

  ngOnInit() {
      this.fetchParkingSlots();
  }

  fetchParkingSlots() {
      this.parkingSlotService.fetchAllSlots().subscribe(slots => {
          this.parkingSlots = slots;
      });
  }
}
