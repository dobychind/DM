import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, color="main" }) => {

  const bgColorClass = color === 'orange' ? 'bg-orange' : 'bg-main';

  return (
    <button className={`text-white font-semibold text-xl py-3 px-6 rounded-[32px] ${bgColorClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
