import { Injectable } from '@angular/core';
import { Plant } from './plant-list/Plant';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantCartService {

  private _cartList: Plant[] = []; 
  private _plantListReference: Plant[] = []; // referencia al catálogo original

  cartList: BehaviorSubject<Plant[]> = new BehaviorSubject(this._cartList); 
  
  constructor() { }
  
  addToCart(plant: Plant) {
  // Buscar la planta en la lista de referencia
  let plantInCatalog = this._plantListReference.find(p => p.name === plant.name);

  if (!plantInCatalog || plantInCatalog.stock < plant.quantity) {
    console.warn('No hay suficiente stock para agregar esta planta');
    return;
  }

  // Descontar stock
  plantInCatalog.stock -= plant.quantity;

  // Agregar al carrito
  let item = this._cartList.find((v1) => v1.name == plant.name);
  if (!item) {
    this._cartList.push({ ...plant });  // Clonamos el objeto
  } else {
    item.quantity += plant.quantity;
  }

  this.cartList.next(this._cartList);
}

  /**
   * Elimina una cantidad específica del carrito.
   * Retorna la cantidad realmente removida.
   */
  removeQuantityFromCart(plantName: string, quantity: number): number {
    let item = this._cartList.find(p => p.name === plantName);
    if (!item) return 0;

    const quantityToRemove = Math.min(quantity, item.quantity);

    item.quantity -= quantityToRemove;

    if (item.quantity <= 0) {
      this._cartList = this._cartList.filter(p => p.name !== plantName);
    }

    this.cartList.next(this._cartList);

    return quantityToRemove;
  }

  /**
   * Guarda una referencia al listado original de plantas (para actualizar stock).
   */
  setPlantListReference(plants: Plant[]) {
    this._plantListReference = plants;
  }

  getFullPlantList(): Plant[] {
    return this._plantListReference;
  }
}
