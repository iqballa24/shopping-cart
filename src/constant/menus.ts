import { Menu } from '@/types';
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { BiCartAlt } from 'react-icons/bi';

const menus: Menu[] = [
  {
    id: 1,
    name: 'Home',
    icon: AiOutlineHome,
    path: '/',
    restrictedAuth: false
  },
  {
    id: 2,
    name: 'Store',
    icon: AiOutlineShop,
    path: '/store',
    restrictedAuth: false
  },
  {
    id: 3,
    name: 'Cart',
    icon: BiCartAlt,
    path: '/cart',
    restrictedAuth: true
  },
];

export default menus;
