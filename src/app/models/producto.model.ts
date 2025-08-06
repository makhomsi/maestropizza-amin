export interface Producto {
  saleItemID: string;
  description: string;
  name: string;
  originalPrice?: number;
  price: number;
  quantity: number;
  topping_names: string;
  toppings: string;
  toppingIds: string[];  
  toppingNames: string[]; 
}