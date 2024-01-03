export interface allEvents {
  id: number;
  name: string;
  ticketprice: number;
  description: string;
  date: string;
  location: string;
}

export const eventevent = [
  {
    id: 1,
    name: ' Drake Concert',
    ticketprice: 799,
    description:
      '1 hour concert of Drake rapping in his hometown, teasing future projects.',
    date: '11 - 13 - 23',
    location: 'Toronto, Canada.',
  },
  {
    id: 2,
    name: ' System of a Down Concert',
    ticketprice: 349,
    description:
      '45 minute concert of System of the Down, including teasers of future music.',
    date: '12 - 10 - 23',
    location: 'Los Angeles, California.',
  },
  {
    id: 3,
    name: ' Bruno Mars Performance',
    ticketprice: 699,
    description: '1 hour concert of Bruno Mars performing Silk Sonic.',
    date: '12 - 20 - 23',
    location: 'Santa Barbara, California.',
  },
  {
    id: 4,
    name: ' Kanye West Concert',
    ticketprice: 499,
    description:
      '2 hour concert of Kanye West rapping and teasing future projects.',
    date: '1 - 5 - 24',
    location: 'San Diego, California.',
  },
  {
    id: 5,
    name: ' Travis Scott Utopia Showcase',
    ticketprice: 949,
    description: '1 hour of Travis Scott performing his new album Utopia',
    date: '2 - 11 - 24',
    location: 'Houston, Texas.',
  },
];

export class AppComponent {
  events: allEvents[] = [];

  constructor() {
    this.createRandomEvents();
  }

  createRandomEvents() {
    for (let i = 0; i < 10; i++) {
      const event = this.events[this.getRandomInt(this.events.length)];
      this.events.push(event);
    }
    console.log(this.events);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}

