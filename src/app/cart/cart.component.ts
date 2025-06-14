import { Component } from '@angular/core';
import { PlantCartService } from '../plant-cart.service';
import { Plant } from '../plant-list/Plant';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartList$: Observable<Plant[]>;

  constructor(private cartService: PlantCartService) {
    this.cartList$ = this.cartService.cartList.asObservable();
  }

  /**
   * Elimina una unidad de una planta del carrito y actualiza el stock.
   */
  removeOneFromCart(plantName: string) {
    const removed = this.cartService.removeQuantityFromCart(plantName, 1);

    if (removed > 0) {
      const fullList = this.cartService.getFullPlantList();
      const plantInCatalog = fullList.find(p => p.name === plantName);
      if (plantInCatalog) {
        plantInCatalog.stock += removed;
      }
    }
  }
}
