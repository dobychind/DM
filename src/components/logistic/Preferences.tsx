import React, { useEffect, useRef, useState } from "react";
import car_top from '/car_top.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Preferences: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768); // Проверка мобильного экрана

  useEffect(() => {
    // Инициализация библиотеки анимации
    Aos.init();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Добавляем обработчик изменения размера окна
    window.addEventListener("resize", handleResize);

    // Скролл анимация для изображения машины
    const handleScroll = () => {
      if (imgRef.current && containerRef.current) {
        const scrollY = window.scrollY;
        const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const containerHeight = containerRef.current.offsetHeight;

        const newTopPosition = Math.min(
          scrollY - containerTop,
          containerHeight - 50
        );

        imgRef.current.style.transform = `translateY(${newTopPosition}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardContent = [
    "Организуем сбор товаров на вашем складе",
    "Транспортируем в наш распределительный центр",
    "Оформляем всю необходимую документацию",
    "Проводим адресную доставку по торговым точкам",
    "Предоставляем детализированный отчет",
    "Ваши товары"
  ];

  const expandedContent = [
    "обеспечиваем своевременную и точную передачу груза, оптимизируя ваши ресурсы.",
    "товар поступает на наш логистический комплекс для оперативной обработки и контроля.",
    "готовим полный пакет документов, гарантируя бесперебойное прохождение всех этапов.",
    "организуем своевременное поступление товаров в назначенные точки с соблюдением всех требований.",
    "вы получаете полную прозрачность и точность информации по каждой поставке.",
    "под нашей компетентной заботой на каждом этапе логистики!"
  ];

  return (
    <div
      className="flex justify-start gap-4 md:gap-16 flex-col w-full overflow-hidden"
      ref={containerRef}
    >
      <h3 className="font-semibold text-main text-lg md:text-3xl 2xl:text-5xl md:w-2/3">
        Сотрудничество в рамках предоставляемого комплекса услуг системы 3PL включает:
      </h3>
      <div className="w-full flex flex-col gap-4 md:gap-16 justify-start items-start relative">
        <img
          src={car_top}
          alt="Машина Даниэль вид сверху"
          ref={imgRef}
          className="h-[150px] md:h-auto absolute right-0 top-0 md:right-64  transition-transform duration-[1500ms] linear"
        />
        {cardContent.map((text, index) => (
          <div
            key={index}
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay={index * 300}
            data-aos-once="true"
            className="relative h-[200px] flex items-center p-2 md:p-0 gap-2 md:gap-4 w-[50%] bg-white rounded-tl-2xl rounded-bl-2xl overflow-visible shadow-md"
            onMouseEnter={() => !isMobile && setHoveredCard(index)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
            onClick={() => isMobile && setHoveredCard(prev => (prev === index ? null : index))}
          >
            {/* Основной блок с текстом и номером */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:p-4 md:h-32 bg-white rounded-bl-2xl rounded-tl-2xl">
              <p className="font-bold text-main text-2xl md:text-3xl">
                {index + 1}
              </p>
              <p className="text-lg  md:text-2xl text-main font-normal">
                {text}
              </p>
            </div>

            {/* Блок с дополнительным текстом, выезжающий за пределы основного блока */}
            <div
              className={`absolute top-0 left-full h-full flex items-center p-4 bg-gray-100 text-black text-md md:text-xl font-normal rounded-r-2xl shadow-md transition-all duration-500 ease-in-out ${
                hoveredCard === index
                  ? 'opacity-100 md:w-[500px] w-full'
                  : 'opacity-0 md:w-0 w-full max-h-0'
              }`}
              style={{ display: hoveredCard === index || !isMobile ? 'flex' : 'none' }}
            >
              {expandedContent[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preferences;
