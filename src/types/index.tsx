import { IconType } from 'react-icons';

export type Menu = {
  id: number;
  name: string;
  icon: IconType;
  path: string;
  restrictedAuth: boolean;
};

export type Tab = {
  id: number;
  value: string;
  label: string;
  icon: IconType;
};

export type FormValue = {
  email: string;
  username: string;
  password: string;
  name: string;
};

export type ItemProduct = {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  hasAddToCart: boolean;
  amount?: number;
};

export type Cart = {
  id: string;
  image: string;
  title: string;
  price: number;
};
