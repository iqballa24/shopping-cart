import axios from 'axios';
import { API } from '@/lib/service/config';

const getProducts = async () => {
  try {
    const res = await API.get('products');
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw new Error(error.message);
    } else {
      console.error(error);
    }
  }
};

const getDetailProduct = async (id: string) => {
  try {
    const res = await API.get(`products/${id}`);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      throw new Error(error.message);
    } else {
      console.error(error);
    }
  }
};

const login = async (username: string, password: string) => {
  try {
    const res = await API.post('auth/login', { username, password });
    return res;
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    } else {
      console.error(error);
    }
  }
};

export default { getProducts, getDetailProduct, login };
