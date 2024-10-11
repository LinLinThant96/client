import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-submission',
  templateUrl: './restaurant-submission.component.html',
  styleUrl: './restaurant-submission.component.css'
})
export class RestaurantSubmissionComponent {
  restaurant: Restaurant = new Restaurant(''); 

  constructor(
    private restaurantService: RestaurantService, 
    private router: Router) {}

  submitRestaurant() {
    this.restaurantService.submitRestaurant(this.restaurant).subscribe(
      response => {
        console.log('Restaurant submitted:', response);
        this.restaurant.name = ''; 
        this.router.navigate(['/random-restaurant']); 
      },
      error => {
        console.error('Error submitting restaurant:', error);
      }
    );
  }
  goToRandomPage() {
    this.router.navigate(['/random-restaurant']);
  }
}
