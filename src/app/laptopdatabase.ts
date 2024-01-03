export interface laptop {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const laptops = [
  {
    id: 1,
    name: 'Acer Aspire 5 Laptop',
    price: 549,
    description:
      'Laptop with a 15.6-in screen, bright screen with very good viewing angles.',
  },
  {
    id: 2,
    name: 'Dell XPS 9315 Laptop',
    price: 599,
    description:
      'Lightweight laptop with two thunderbolt ports, also has a 13.4-inch screen, and a drive capacity of 16 GB to 2 TB.',
  },
  {
    id: 3,
    name: 'Microsoft Surface Laptop 5 13.5" Notebook',
    price: 1099,
    description:
      'Excellent keyboard with thunderbolt 4 connectivty, and a keyboard flex on alcantara models.',
  },
  {
    id: 4,
    name: 'Asus Vivobook 15 OLED 15.6" Display Ryzen 5',
    price: 949,
    description:
      'OLED Display lightweight laptop, with a AMD Ryzen 7030U Series processor.',
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad 3i 15.6" FHD Touch Laptop',
    price: 449,
    description:
      'Ultimate smart learning notebook, has a powerful 11th Generation Intel Core i3 processor.',
  },
];
