import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { television, televisions } from '../televisiondatabase';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-television-details',
  templateUrl: './television-details.component.html',
  styleUrls: ['./television-details.component.css'],
})
export class TelevisionDetailsComponent implements OnInit {
  addToCart(television: television) {
    this.cartService.addToCart(television);
    window.alert('Your product has been added to the cart!');
  }

  television: television | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const televisionIdFromRoute = Number(routeParams.get('televisionId'));

    this.television = televisions.find(
      (television) => television.id === televisionIdFromRoute
    );
  }
}
