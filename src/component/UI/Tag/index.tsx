import React from 'react';

const Tag: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="py-1.5 px-3 border border-primary w-fit text-sm rounded-md hover:text-white hover:bg-primary cursor-pointer">
      <p>{text}</p>
    </div>
  );
};

export default Tag;
