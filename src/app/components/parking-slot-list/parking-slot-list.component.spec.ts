import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSlotListComponent } from './parking-slot-list.component';

describe('ParkingSlotListComponent', () => {
  let component: ParkingSlotListComponent;
  let fixture: ComponentFixture<ParkingSlotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParkingSlotListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingSlotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
