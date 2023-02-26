import { Tab } from '@/types';
import { AiOutlineHome } from 'react-icons/ai';
import { GiElectric, GiJewelCrown } from 'react-icons/gi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

const categories: Tab[] = [
  {
    id: 1,
    label: 'All',
    value: "all",
    icon: AiOutlineHome,
  },
  {
    id: 2,
    label: 'Electronics',
    value: "electronics",
    icon: GiElectric,
  },
  {
    id: 3,
    label: 'Jewelry',
    value: "jewelery",
    icon: GiJewelCrown,
  },
  {
    id: 4,
    label: 'Men`s Clothing',
    value: "men's clothing",
    icon: BsGenderMale,
  },
  {
    id: 5,
    label: 'Women`s Clothing',
    value: "women's clothing",
    icon: BsGenderFemale,
  },
];

export default categories;
