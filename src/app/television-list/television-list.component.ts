import { Component } from '@angular/core';

import { televisions } from '../televisiondatabase';

@Component({
  selector: 'app-television-list',
  templateUrl: './television-list.component.html',
  styleUrls: ['./television-list.component.css']
})
export class TelevisionListComponent {
  televisions = [...televisions];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
}
