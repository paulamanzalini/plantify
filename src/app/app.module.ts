import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant-list/plant-list.component';

import { FormsModule } from '@angular/forms';
import { PlantifyAboutComponent } from './plantify-about/plantify-about.component';
import { PlantifyPlantsComponent } from './plantify-plants/plantify-plants.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlantListComponent,
    PlantifyAboutComponent,
    PlantifyPlantsComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
