import React from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  style: 'primary' | 'secondary' | 'danger';
  isFull?: boolean;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  type,
  title,
  style,
  onClick,
  children,
  disabled,
  isFull,
}) => {
  const className = [
    'flex flex-row items-center px-6 py-2 rounded-md transition-all text-sm justify-center',
  ];

  switch (style) {
    case 'primary':
      className.push('bg-primary text-white hover:bg-primary/90');
      break;
    case 'secondary':
      className.push(
        'bg-transparent border text-primary border-primary hover:font-bold'
      );
      break;
    case 'danger':
      className.push('bg-red-400 hover:bg-red-500 text-white');
  }

  isFull && className.push('w-full');
  disabled && className.push('cursor-not-allowed disabled:opacity-75')

  return (
    <button
      type={type}
      title={title}
      className={className.join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
