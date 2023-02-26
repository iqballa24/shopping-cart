import toast from 'react-hot-toast';
import { Dispatch } from '@reduxjs/toolkit';
import API from '@/lib/service/API';
import { authSliceAction } from '@/store/auth';

export const asyncLogin = (username: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await API.login(username, password);
      const token = res?.data.token;

      dispatch(authSliceAction.setAuth({ token, username }));
      toast.success('Login successfull');
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        console.log('Unexpected error', err);
        toast.error('Something went wrong');
      }
    }
  };
};

export const asyncLogout = () => {
  return (dispatch: Dispatch) => {
    dispatch(authSliceAction.unsetAuthUser());
    toast.success('Log out successful');
  };
};
