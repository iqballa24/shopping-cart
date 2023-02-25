import React from 'react';

const AvatarImage: React.FC<{ name: string; size: number }> = ({
  name,
  size,
}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <img
        src={`https://ui-avatars.com/api/?name=${name}&background=4C7C7D&color=fff&size=${size}`}
        alt="avatar"
        width={'fit-content'}
        className={`rounded-full`}
      />
      <p className='hidden md:block text-sm lg:text-base truncate'>Tengku Iqbal Nugraha</p>
    </div>
  );
};

export default AvatarImage;
