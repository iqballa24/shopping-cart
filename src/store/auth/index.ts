import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    username: '',
    token: null,
  },
  reducers: {
    setAuth(state, { payload }) {
      state.isLoggedIn = true;
      state.token = payload.token;
      state.username = payload.username;
    },
    unsetAuthUser(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.username = '';
    },
  },
});

export const authSliceAction = authSlice.actions;
export default authSlice;
