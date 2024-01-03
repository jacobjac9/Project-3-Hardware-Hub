import { Component } from '@angular/core';
import { eventevent, allEvents } from '../eventevent';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  eventevent = [...eventevent];
  allEvents = [...eventevent];
  createRandomEvents = [...eventevent];

  showDetails(event: any) {
    window.alert(
      `Name:${event.name}\nTicket Price: ${event.ticketprice}\nDescription: ${event.description}\nLocation: ${event.location}\nDate: ${event.date}`
    );
  }

  onNotify() {
    window.alert('Buy tickets to event!')
  }
}
