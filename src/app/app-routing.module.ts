import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingSlotListComponent } from './components/parking-slot-list/parking-slot-list.component';
import { AssignSlotComponent } from './components/assign-slot/assign-slot.component';

const routes: Routes = [
  { path: '', component: ParkingSlotListComponent },
  { path: 'parking-slot-list', component: ParkingSlotListComponent },
  { path: 'assign-slot', component: AssignSlotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
