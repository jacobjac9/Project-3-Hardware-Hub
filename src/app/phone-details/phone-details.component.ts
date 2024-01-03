import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { phone, phones } from '../phonedatabase';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css'],
})
export class PhoneDetailsComponent implements OnInit {

  addToCart(phone: phone) {
    this.cartService.addToCart(phone);
    window.alert('Your product has been added to the cart!');
  }
  
  phone: phone | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const phoneIdFromRoute = Number(routeParams.get('phoneId'));

    this.phone = phones.find(
      (phone) => phone.id === phoneIdFromRoute
    );
  }
}
