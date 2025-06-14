import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantifyPlantsComponent } from './plantify-plants/plantify-plants.component';
import { PlantifyAboutComponent } from './plantify-about/plantify-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'plants',
    pathMatch: 'full'
  },
  {
    path: 'plants', 
    component: PlantifyPlantsComponent
  },
  {
    path: 'about',
    component: PlantifyAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
