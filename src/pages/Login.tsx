import React from 'react';
import { Link } from 'react-router-dom';

import FormLogin, { LoginProps } from '@/component/Form/FormLogin';

const Login = () => {
  const submitHandler = async(data: LoginProps) => {
    const { username, password } = data;
  };

  return (
    <section className="flex flex-col p-5 fixed top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-full max-w-lg space-y-10">
      <div className="flex flex-row items-center justify-center md:space-x-3">
        <img
          src="/logo.svg"
          alt="logo deforum"
          className="w-full max-w-[140px]"
        />
      </div>
      <FormLogin submitHandler={submitHandler}/>
      <div className="space-y-5 text-center">
        <hr />
        <p className="text-text font-light text-sm">
          Dont have an account ?{' '}
          <Link to="register" className="text-blue-400 hover:underline">
            Register now.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
