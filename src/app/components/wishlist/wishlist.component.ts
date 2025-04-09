import { Component, inject } from '@angular/core';
import { WishlistCartService } from '../../services/wishlist-cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
wishlistService = inject(WishlistCartService);


}
