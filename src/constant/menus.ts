import { IconType } from 'react-icons';
import {
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineBarChart,
} from 'react-icons/ai';

type menuTypes = {
  id: number;
  name: string;
  icon: IconType;
  path: string;
};

const menus: menuTypes[] = [
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
    name: 'Profile',
    icon: AiOutlineUser,
    path: '/profile',
  },
];

export default menus;
