import { Tab } from '@/types';
import { AiOutlineHome } from 'react-icons/ai';
import { GiElectric, GiJewelCrown } from 'react-icons/gi';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';

const categories: Tab[] = [
  {
    id: 1,
    value: 'All',
    icon: AiOutlineHome,
  },
  {
    id: 2,
    value: 'Electronics',
    icon: GiElectric,
  },
  {
    id: 3,
    value: 'Jewelry',
    icon: GiJewelCrown,
  },
  {
    id: 4,
    value: 'Men`s Clothing',
    icon: BsGenderMale,
  },
  {
    id: 5,
    value: 'Women`s Clothing',
    icon: BsGenderFemale,
  },
];

export default categories;
