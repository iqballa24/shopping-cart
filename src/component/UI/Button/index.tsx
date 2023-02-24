import React from 'react';

type Props = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  style: 'primary' | 'secondary' | 'danger';
  isFull?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({
  type,
  title,
  style,
  onClick,
  children,
  isFull,
}) => {
  const className = [
    'flex flex-row items-center px-6 py-2 rounded-md transition-all text-sm',
  ];

  switch (style) {
    case 'primary':
      className.push('bg-primary text-white hover:bg-primary/90');
      break;
    case 'secondary':
      className.push('bg-white border text-primary border-primary hover:font-bold');
      break;
    case 'danger':
      className.push('bg-red-400 hover:bg-red-500 text-white');
  }

  isFull && className.push('w-full');

  return (
    <button
      type={type}
      title={title}
      className={className.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
