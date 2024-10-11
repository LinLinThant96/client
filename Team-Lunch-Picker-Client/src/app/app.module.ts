import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantSubmissionComponent } from './restaurant-submission/restaurant-submission.component';
import { RandomRestaurantComponent } from './random-restaurant/random-restaurant.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSubmissionComponent,
    RandomRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,          
    HttpClientModule,    
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
