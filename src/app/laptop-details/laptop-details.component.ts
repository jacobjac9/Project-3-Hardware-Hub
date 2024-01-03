import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { laptop, laptops } from '../laptopdatabase';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css'],
})
export class LaptopDetailsComponent implements OnInit {

  addToCart(laptop: laptop) {
    this.cartService.addToCart(laptop);
    window.alert('Your product has been added to the cart!');
  }
  
  laptop: laptop | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const laptopIdFromRoute = Number(routeParams.get('laptopId'));

    this.laptop = laptops.find(
      (laptop) => laptop.id === laptopIdFromRoute
    );
  }
}
