import { Component, inject } from '@angular/core';
import { ShoppingcartService } from '../../services/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [],
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {
shoppingCartService = inject(ShoppingcartService);

ngOnInit(){
  this.shoppingCartService.init();
}
get cartItems(){
  return this.shoppingCartService.items;
}



}
