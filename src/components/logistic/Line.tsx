import React, { useState, useEffect, useRef } from "react";
import gaz from "/Gazlog.png"; // Замените на реальный путь к изображению

const Line: React.FC = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const blockRef = useRef<HTMLDivElement>(null); // Указываем правильный тип для useRef

    useEffect(() => {
        // Инициализируем IntersectionObserver
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAnimated(true); // Запускаем анимацию, когда блок входит в область видимости
                }
            },
            {
                threshold: 1, // Блок должен быть на 100% видим
            }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current); // Начинаем наблюдение за блоком
        }

        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current); // Прекращаем наблюдение при размонтировании компонента
            }
        };
    }, []);

    return (
        <div
            ref={blockRef}
            className="relative w-full h-[90px] rounded-2xl bg-white text-black flex items-center justify-center overflow-hidden"
        >
            {/* Текстовый блок */}
            <p className=" text-xl md:text-3xl font-semibold text-center px-4 z-10">
                Ваши товары — под нашей компетентной заботой на каждом этапе логистики!
            </p>

            {/* Анимированная картинка */}
            <div
                className={`absolute w-full top-1/2 left-0 bg-white z-20 transform -translate-y-1/2 transition-transform duration-[3000ms] ease-in-out ${isAnimated ? "translate-x-[100%]" : "translate-x-0"
                    }`}
            >
                <img
                    src={gaz}
                    alt="Moving icon"
                    className="h-[80px] object-contain"
                />
            </div>
        </div>
    );
};

export default Line;
