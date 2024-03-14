import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className='text-white font-semibold text-xl py-3 px-6 bg-main rounded-[32px]' onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
