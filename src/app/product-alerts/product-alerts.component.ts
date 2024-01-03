import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import { television } from '../televisiondatabase';
import { phone } from '../phonedatabase';
import { laptop } from '../laptopdatabase';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
  @Input() television: television | undefined;
  @Input() phone: phone | undefined;
  @Input() laptop: laptop | undefined;

}
