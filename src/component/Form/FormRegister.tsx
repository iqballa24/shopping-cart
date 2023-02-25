import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@/component/UI';
import { FormValue } from '@/types';

export type RegisterProps = {
  username: string;
  name: string;
  email: string;
  password: string;
};

const FormRegister: React.FC<{
  submitHandler: (data: RegisterProps) => void;
}> = ({ submitHandler }) => {
  const { handleSubmit, control, formState } = useForm<FormValue>({
    defaultValues: {
      username: '',
      name: '',
      password: '',
      email: '',
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
              message: 'Username must be be 3 and not contain whitespace',
            },
          },
        }}
      />
      <Input
        type="text"
        label="Name"
        placeholder="Your name"
        form={{
          control,
          name: 'name',
          rules: {
            required: 'Name field is required',
          },
        }}
      />
      <Input
        type="text"
        label="Email address"
        placeholder="email@domain.com"
        form={{
          control,
          name: 'email',
          rules: {
            required: 'Email field is required',
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: 'Email must be a valid email',
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
              value: /^(?=.*[A-Z])(?=.*\d)[\w@$!%*?&]{5,}$/g,
              message:
                'Password must be 5 or more character and contain at least one letter and one number',
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
        {formState.isSubmitting ? 'Loading...' : 'Login'}
      </Button>
    </form>
  );
};

export default FormRegister;
