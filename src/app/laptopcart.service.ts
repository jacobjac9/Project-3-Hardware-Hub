import { HttpClient } from '@angular/common/http';
import { laptop } from './laptopdatabase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: laptop[] = [];

  constructor(private http: HttpClient) {}

  addToCart(laptop: laptop) {
    this.items.push(laptop);
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
