export interface Ilinks {
  id: number
  href: string
  name: string
}

interface Guarantee {
  start: string;
  end: string;
}

export interface Price {
  value: number;
  symbol: string;
  isDefault?: number;
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}

export interface Order {
  id: number;
  title: string;
  date: string;
  description?: string;
  products: Product[];
}

export interface Data {
  orders: Order[];
  products: Product[];
}

export interface UIOrder {
  id: number;
  title: string;
  date: string;
  products: number;
  totalPriceUsd: number;
  totalPriceUah: number;
}

export interface UIPopup {
  photo: string;
  title: string;
  serialNumber: number;
}

export interface IButton {
  text: string;
  red?: boolean;
  white?: boolean;
}

export interface UIProduct {
  id: number;
  imgSrc: string;
  title: string;
  serialNumber: number;
  type: string;
  orderTitle: string;
  start: string;
  end: string;
  totalPriceUsd: number;
  totalPriceUah: number;
}
