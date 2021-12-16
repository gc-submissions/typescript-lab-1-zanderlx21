import { Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

export function calcInventoryValue(inventoryItem: InventoryItem[]): number {
  let total: number = 0;
  inventoryItem.forEach((item: any) => {
    let productTotalPrice: number = item.product.price * item.quantity;
    total += productTotalPrice;
  });
  if (inventoryItem.length === 0) {   // If array is empty, return 0
    return total;
  }
  return total;
}

let InventoryValue: number = calcInventoryValue(inventory);
console.log(InventoryValue);
