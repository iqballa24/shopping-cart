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
  const { handleSubmit, control, formState } = useForm<FormValue>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

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
            pattern: {
              value: /^(?=.*[A-Z])[\w@$!%*?&]{3,10}$/g,
              message:
                'Password must be 3 and not more than 10 characters and contain at least one capital letter',
            },
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
        {formState.isSubmitting ? 'Loading...' : 'Register'}
      </Button>
    </form>
  );
};

export default FormLogin;
