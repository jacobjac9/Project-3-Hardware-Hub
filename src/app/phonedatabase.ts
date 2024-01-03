export interface phone {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const phones = [
  {
    id: 1,
    name: 'Google Pixel 8 Pro',
    price: 799,
    description:
      'Phone with a 6.7-inch display, 50 MP rear camera and a 10.5 MP front camera.',
  },
  {
    id: 2,
    name: 'OnePlus 11',
    price: 799,
    description:
      'Quality phone with a powerful Snapdragon 8 Gen 2 Octa Core Processor, 8 GB of RAM, and 128 GB of storage.',
  },
  {
    id: 3,
    name: 'Samsung Galaxy A54 5G',
    price: 399,
    description:
      'Phone with a 6.4-inch display, 256 GB of storage, and has high quality cameras that allow high-quality videos to be recorded.',
  },
  {
    id: 4,
    name: 'Apple iPhone 15 Pro Max',
    price: 1299,
    description:
      'Latest iPhone with a better camera and a new USB-C port added to it. Has eloquent materials and a titanium body.',
  },
  {
    id: 5,
    name: 'Google Pixel 7A',
    price: 499,
    description:
      'Moderately-priced phone with a phenomenal camera, strong performance, and water-resistant as well.',
  },
];
