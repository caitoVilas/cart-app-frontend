import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
   @Input() items: CartItem[] = [];
   @Input() total = 0;
   @Output() idProductEventEmmiter: EventEmitter<number> = new EventEmitter();

   onDeleteCart(id: number) {
    this.idProductEventEmmiter.emit(id);
   }

}
