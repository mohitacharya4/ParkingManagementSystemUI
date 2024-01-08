import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToSlotList() {
    this.router.navigate(['/parking-slot-list']);
  }

  navigateToAssignSlot() {
    this.router.navigate(['/assign-slot']);
  }
}
