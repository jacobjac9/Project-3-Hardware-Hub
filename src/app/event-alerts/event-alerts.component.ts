import { Component, Input, Output, EventEmitter } from '@angular/core';
import { allEvents } from '../eventevent';

@Component({
  selector: 'app-event-alerts',
  templateUrl: './event-alerts.component.html',
  styleUrls: ['./event-alerts.component.css'],
})
export class EventAlertsComponent {
  @Input() eventevent: allEvents | undefined;
  @Output() notify = new EventEmitter();
}
