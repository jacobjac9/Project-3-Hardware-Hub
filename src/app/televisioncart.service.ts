import { HttpClient } from '@angular/common/http';
import { television } from './televisiondatabase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: television[] = [];

  constructor(private http: HttpClient) {}

  addToCart(television: television) {
    this.items.push(television);
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
