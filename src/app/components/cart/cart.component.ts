import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() image;

  public cart;

  constructor(private cartService: CartService) {
    this.cartService.cart.subscribe((cart) => {
      this.cart = cart
    })
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  public removeCartItem(item) {
    this.cartService.deleteCartItem(item)
  }

  public updateItemQuantity(item) {
    this.cartService.updateItemQuantity(item._id, item.quantity)
    item.editing = false;
  }

  public edit(item) {
    item.originalQuantity = item.quantity
    item.editing = true
  }

  public save(item) {
    item.editing = false;
  }

  public cancel(item) {
    item.editing = false
    item.quantity = item.originalQuantity
  }

}
