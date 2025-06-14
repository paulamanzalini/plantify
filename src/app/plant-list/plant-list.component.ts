import { Component, OnInit } from '@angular/core';  
import { Plant } from './Plant';
import { PlantCartService } from '../plant-cart.service';
import { PlantDataService } from '../plant-data.service';

@Component({
  selector: 'app-plant-list',
  standalone: false,
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {  

  plants: Plant[] = [];  

  constructor(
    private cartService: PlantCartService,
    private plantsDataService: PlantDataService
  ) {}

  ngOnInit(): void {
    // llama al servicio para traer las plantas de la API
    this.plantsDataService.getAll().subscribe({
      next: (data) => {
        this.plants = data;
        // avisa al servicio del carrito que la lista cambió
        this.cartService.setPlantListReference(this.plants);
      },
      error: (err) => {
        console.error('Error al cargar las plantas', err);
        // muestra mensaje de error 
      }
    });
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(plant: Plant): void {
    if (!plant.quantity || plant.quantity < 1) {
      alert('Por favor, agregá una cantidad antes de comprar.');
      return;
    }

    this.cartService.addToCart(plant);
    plant.quantity = 0;
  }
}
