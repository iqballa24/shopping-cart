import { Menus } from '@/types';
import {
  AiOutlineHome,
  AiOutlineShop,
} from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

const menus: Menus[] = [
  {
    id: 1,
    name: 'Home',
    icon: AiOutlineHome,
    path: '/',
  },
  {
    id: 2,
    name: 'Store',
    icon: AiOutlineShop,
    path: '/store',
  },
  {
    id: 3,
    name: 'Cart',
    icon: BiCartAlt,
    path: '/cart',
  },
];

export default menus;
