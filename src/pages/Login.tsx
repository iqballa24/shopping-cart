import React from 'react';

import FormLogin, { LoginProps } from '@/component/Form/FormLogin';
import { useAppDispatch } from '@/lib/hooks/useRedux';
import { asyncLogin } from '@/store/auth/action';

const Login = () => {
  const dispatch = useAppDispatch();

  const submitHandler = async (data: LoginProps) => {
    const { username, password } = data;
    await dispatch(asyncLogin(username, password));
  };

  return (
    <section className="flex flex-col p-5 w-full h-full max-w-lg space-y-10 mx-auto my-auto mt-28">
      <div className="flex flex-row items-center justify-center md:space-x-3">
        <img
          src="/logo.svg"
          alt="logo deforum"
          className="w-full max-w-[140px]"
        />
      </div>
      <FormLogin submitHandler={submitHandler} />
    </section>
  );
};

export default Login;
