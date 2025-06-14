import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plant } from '../plant-list/Plant';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  constructor(){}

  @Input({ required: true }) quantity!: number;

  @Input() max!: number;

  @Output() quantityChange : EventEmitter<number> = new EventEmitter<number>();

  @Output() maxReached: EventEmitter<string> = new EventEmitter<string>();

  /* FUNCION PARA AUMENTAR LA CANTIDAD DE PLANTAS (SIEMPRE QUE HAYA STOCK) */
  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzó el máximo de plantas.")
    }
  }

  /* FUNCION PARA DISMINUIR LA CANTIDAD DE PLANTAS (SIEMPRE QUE HAYA) */
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  /* INPUT PARA PONER DIRECTAMENTE EL NUMERO */
  changeQuantity(event: KeyboardEvent): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

}
