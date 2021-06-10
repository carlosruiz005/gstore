import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Item[];

  constructor() {
    this.cart = [];
  }

  addItem(item: Item) {
    if (item !== null && item !== undefined) {
      this.cart.push(item);
      return item;
    }
    return;
  }

  countItem(item: Item) {
    return this.cart.filter(i => i.barcode === item.barcode).length;
  }

  getCartTotal() {
    return this.cart.reduce((sum, current) => sum + current.price, 0);
  }

  deleteCartItem(item: Item) {
    this.cart.splice(this.cart.indexOf(item), 1);
  }

  clearCart() {
    this.cart = [];
  }
}
