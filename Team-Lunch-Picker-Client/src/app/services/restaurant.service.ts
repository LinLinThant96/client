import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:8080/api/restaurants';
  
  constructor(private http: HttpClient) {}
  
  submitRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post(this.apiUrl + "/add", restaurant);
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl + "/all");
  }

  getRandomRestaurant(): Observable<Restaurant>{
    return this.http.get<Restaurant>(this.apiUrl + "/random");
  }

}
