import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantSubmissionComponent } from './restaurant-submission/restaurant-submission.component';
import { RandomRestaurantComponent } from './random-restaurant/random-restaurant.component';

const routes: Routes = [
  { path: '', component: RestaurantSubmissionComponent },
  { path: 'random-restaurant', component: RandomRestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
