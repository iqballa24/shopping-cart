import React from 'react';

const TitleText: React.FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-lg md:text-2xl font-bold leading-8 capitalize ">{text}</h2>;
};

export default TitleText;
