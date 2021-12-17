export interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Steak", price: 14.99 },
  { name: "Chicken", price: 9.99 },
  { name: "Fish", price: 12.99 },
];

export function calcAverageProductPrice(products: Product[]): number {
  let sum: number = 0;
  products.forEach((element: any) => {
    sum += element.price;
  });
  if (products.length === 0) {    // If array is empty, return 0
    return 0;
  }
  let average: number = sum / products.length;
  return average;
}

let productsAverage: number = calcAverageProductPrice(products);
console.log(productsAverage);
