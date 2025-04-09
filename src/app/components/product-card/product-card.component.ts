import { Component, inject, Input } from '@angular/core';
import { Product } from '../../types/product';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WishlistCartService } from '../../services/wishlist-cart.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, NgFor, CommonModule, RouterLink, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  wishlistService = inject(WishlistCartService);

  get SellingPrice() {
    return Math.round(
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  addToWishList(product: Product) {
    console.log(product);
    if (this.isInWishList(product)) {
      this.wishlistService.removeFromWishLists(product._id!).subscribe((res) => {
        this.wishlistService.init();
      });
    } else {
      this.wishlistService.addInWishList(product._id!).subscribe((res) => {
        this.wishlistService.init();
      });
    }
  }

  isInWishList(product: Product) {
    let productExists = this.wishlistService.wishlists.find(
      (x) => x._id == product._id
    );

    if (productExists) return true;
    else return false;
  }
}
