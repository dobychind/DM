import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, color="main" }) => {

  const bgColorClass = color === 'orange' ? 'bg-orange' : 'bg-main';

  return (
    <button className={`text-white font-medium text-xl py-3 px-4 rounded-[32px] hover:bg-opacity-80 hover:transition-opacity hover:duration-300 ${bgColorClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
