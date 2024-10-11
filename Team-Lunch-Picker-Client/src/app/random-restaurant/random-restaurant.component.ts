import { Component } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'random-restaurant',
  templateUrl: './random-restaurant.component.html',
  styleUrl: './random-restaurant.component.css'
})
export class RandomRestaurantComponent {
  restaurants: Restaurant[] = [];
  randomRestaurant: string = ''; 

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      (data: Restaurant[]) => {
        this.restaurants = data;
      },
      error => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  generateRandomRestaurant() {
    this.restaurantService.getRandomRestaurant().subscribe(
      (data: Restaurant)=>{
        this.randomRestaurant = 'Let`s Go : ' + data?.name || 'No restaurants available';
        console.log(JSON.stringify(data));
      },
      error => {
        console.error('Error fetching random restaurant:', error);
      }
    );
    //const randomIndex = Math.floor(Math.random() * this.restaurants.length);
    //this.randomRestaurant = this.restaurants[randomIndex]?.name || 'No restaurants available';
  }
}
