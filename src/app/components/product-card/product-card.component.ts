import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();

  onAddCart(product: Product){
    this.productEventEmitter.emit(product);
  }
}
