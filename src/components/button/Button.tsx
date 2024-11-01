import React from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, color = "main" }) => {
  const bgColorClass = color === 'orange' ? 'bg-orange' : 'bg-main';

  return (
    <button
      className={`relative overflow-hidden text-main font-medium text-xl py-3 px-4 rounded-[32px] border border-main transition-colors duration-300 hover:text-white`}
      onClick={onClick}
    >
      {/* Фоновый слой с анимацией */}
      <span
        className={`absolute inset-0 ${bgColorClass} transform translate-y-full transition-transform duration-500 ease-in-out`}
        aria-hidden="true"
      />
      {/* Текст внутри кнопки */}
      <span className="flex gap-1 relative pointer-events-none">{text} &#62;
      </span>

      {/* При наведении активируем анимацию фона */}
      <style>{`
        button:hover span:first-child {
          transform: translateY(0);
        }
      `}</style>
    </button>
  );
};

export default Button;