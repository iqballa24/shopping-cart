import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@/component/UI';
import { FormValue } from '@/types';

export type LoginProps = {
  username: string;
  password: string;
};

const FormLogin: React.FC<{
  submitHandler: (data: LoginProps) => void;
}> = ({ submitHandler }) => {
  const { handleSubmit, control, formState, setValue } = useForm<FormValue>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const guestHandler = () => {
    setValue('username', import.meta.env.VITE_USERNAME_GUEST);
    setValue('password', import.meta.env.VITE_PASSWORD_GUEST);
  };

  return (
    <form className="flex flex-col space-y-7">
      <Input
        type="text"
        label="Username"
        placeholder="Your username"
        form={{
          control,
          name: 'username',
          rules: {
            required: 'Username field is required',
            pattern: {
              value: /^[a-zA-Z0-9_]{3,30}\S*$/,
              message: 'Username must be be 3 and not more than 30 characters',
            },
          },
        }}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Your password"
        form={{
          control,
          name: 'password',
          rules: {
            required: 'Password field is required',
          },
        }}
      />
      <Button
        type="submit"
        title="Sign in"
        style="primary"
        isFull
        onClick={handleSubmit(submitHandler)}
      >
        {formState.isSubmitting ? 'Loading...' : 'Login'}
      </Button>
      <p
        className="text-xs text-center hover:underline cursor-pointer hover:text-primary-light/60"
        onClick={guestHandler}
      >
        Continue as a guest
      </p>
    </form>
  );
};

export default FormLogin;
