import { IconType } from 'react-icons';

export type Product = {
  id: number;
  title: string;
  rating: number;
  totalSold: number;
  price: number;
  isAddToCart: boolean;
};

export type Menus = {
  id: number;
  name: string;
  icon: IconType;
  path: string;
};

export type Tab = {
  id: number;
  value: string;
  icon: IconType;
};

export type FormValue = {
  email: string;
  username: string;
  password: string;
  name: string;
};
