import { Price } from "./types";

export interface Cart {
  id: string;
  items: CartItemModel[];
  totalPrice?: Price;
}

export interface CartItemModel {
  id: string;
  product: ProductModel;
  qty: number;
  totalPrice?: Price;
}

export interface ProductModel {
  sku: string;
  name: string;
  price: PriceModel;
  offers: ProductOfferModel[];
  bestPrice?: PriceModel;
}

export interface PriceModel {
  value: number;
  label: string;
}
export interface ProductOfferModel {
  id: string;
  price: PriceModel;
}

