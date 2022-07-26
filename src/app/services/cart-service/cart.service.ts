import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { order } from 'scriptjs';
import { ProductsApisService } from '../api-services/products-apis.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart = new Observable<any>()
  private cartSubject = new Subject<Object>()

  public cartItems = {items: [], total: 0};
  public cartTotal = 0;
  public orderId;

  constructor(private router: Router, private productsApis: ProductsApisService) {
    this.cartSubject = new Subject();
    this.cart = this.cartSubject.asObservable();
    if(localStorage.getItem('ASii_Medical_Cart')) {
      this.setCartFromLocalStorage()
    }
  }

  public async setCartFromLocalStorage() {
    let itemIds = JSON.parse(localStorage.getItem('ASii_Medical_Cart'))
    let cart = await this.getCartItems(itemIds)
    this.cartItems.items = cart
    this.setCartTotal()
  }

  public async getCartItems(itemIds) {
    let cart = []

    for(let item of itemIds) {
      let res = await this.productsApis.getProductById(item._id).toPromise()
      res['quantity'] = item.quantity
      cart.push(res)
    }

    return cart;
  }

  public getCart() {
    return this.cartItems;
  }

  public getCartTotal() {
    return this.cartItems.total
  }

  public updateCart(item, quantity) {
    let duplicates = this.cartItems.items.filter(cartItem => item._id === cartItem._id)
    if(duplicates.length) {
      let duplicate = this.cartItems.items.find(cartItem => cartItem._id === item._id)
      duplicate.quantity = Number(duplicate.quantity) + Number(quantity)
      this.setCartTotal()
    } else {
      item.quantity = quantity
      this.cartItems.items.push(item)
      this.setCartTotal()
      this.cartSubject.next(this.cartItems)
    }
    this.cartChangeEffects()
  }

  public deleteCartItem(item) {
    this.cartItems.items = this.cartItems.items.filter(cartItem => cartItem._id !== item._id)
    this.setCartTotal()
    this.cartSubject.next(this.cartItems)
    this.cartChangeEffects()
  }

  public setCartTotal() {
    let total = 0
    this.cartItems.items.forEach(item => {
      total += Number((item.SalePrice * item.quantity).toFixed(2))
    })
    this.cartItems.total = total;
  }

  public updateItemQuantity(itemId, itemQuantity) {
    this.cartItems.items.find(item => item._id === itemId).quantity = itemQuantity
    this.setCartTotal()
    this.cartSubject.next(this.cartItems)
    this.cartChangeEffects()
  }

  public cartChangeEffects() {
    this.setLocalStorageCart()
  }

  public setLocalStorageCart() {
    let cart = []
    this.cartItems.items.forEach(item => {
      cart.push({_id: item._id, quantity: item.quantity})
    });
    localStorage.setItem('ASii_Medical_Cart', JSON.stringify(cart))
  }

  public setPaymentDetails(orderId) {
      this.orderId = orderId
  }
  public getPaymentDetails() {
    return this.orderId
  }
}
