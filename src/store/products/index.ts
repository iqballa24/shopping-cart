import { ItemProduct } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export type ProductsType = {
  data: ItemProduct[];
  isLoading: boolean;
  selectedProduct: ItemProduct;
  filter: string;
  category: string;
};

const initialState: ProductsType = {
  data: [],
  isLoading: true,
  selectedProduct: {
    id: '',
    title: '',
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { rate: 0, count: 0 },
    hasAddToCart: false,
  },
  filter: '',
  category: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, { payload }) {
      state.data = payload;
    },
    toggleLoading(state, { payload }) {
      state.isLoading = payload;
    },
    setSelectedProduct(state, { payload }) {
      state.selectedProduct = payload;
    },
    productAddToCart(state, { payload }) {
      const newProducts = state.data.map((product: ItemProduct) => {
        if (product.id == payload) {
          return {
            ...product,
            hasAddToCart: true,
          };
        } else {
          return { ...product };
        }
      });
      state.selectedProduct.hasAddToCart = true;
      state.data = newProducts;
    },
    productRemoveFromCart(state, { payload }) {
      const newProducts = state.data.map((product: ItemProduct) => {
        if (product.id == payload) {
          return {
            ...product,
            hasAddToCart: false,
          };
        } else {
          return { ...product };
        }
      });
      state.selectedProduct.hasAddToCart = false;
      state.data = newProducts;
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
    setCategory(state, { payload }) {
      state.category = payload;
    },
  },
});

export const productSliceAction = productSlice.actions;
export default productSlice;
