import { HttpClient } from '@angular/common/http';
import { phone } from './phonedatabase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: phone[] = [];

  constructor(private http: HttpClient) {}

  addToCart(phone: phone) {
    this.items.push(phone);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
