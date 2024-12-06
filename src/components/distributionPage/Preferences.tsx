import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import gaz from '/gazelle.png';

const Preferences: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    Aos.init();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardContent = [
    "Устойчивое присутствие на рынке",
    "Высокий ежемесячный оборот",
    "Лидер в дистрибуции",
    "Прямые контракты с поставщиками",
    "Новаторы в онлайн-ритейле",
  ];

  const icons = [
    "/profit.svg",
    "/high_val.svg",
    "/top.svg",
    "/handshake.png",
    "/Idea.svg",
  ];

  const expandedContent = [
    "Группа компаний, успешно работает на рынке с 2012 года.",
    "Ежемесячный оборот по группе компаний составляет 120 млн рублей.",
    "Крупнейший дистрибьютор хлеба и хлебобулочных изделий в трех регионах России – Санкт-Петербург, Москва, Великий Новгород.",
    "Налаженные прямые контракты с поставщиками хлебобулочных изделий для всех сетей СЗФО и ЦФО, а также для локальных сетей и онлайн-ритейла.",
    "С 2019 года первыми начали поставки хлебобулочных изделий в онлайн-ритейл: Самокат и Яндекс Лавку.",
  ];


  const getCardStyles = (index: number, isHovered: boolean) => {
    const baseStyles = "flex justify-center flex-col items-center p-4 shadow-md rounded-xl transform transition-all duration-500";
    const hoverStyles = isHovered ? "shadow-lg scale-105 z-50" : "z-0";
    const backgroundStyles = index >= 1 && index <= 3 ? "bg-[#ffa058] text-black" : "bg-[#ffa058] text-black";

    return `${baseStyles} ${hoverStyles} ${backgroundStyles}`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 z-50">

      <div
        className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-5"
          } w-full items-stretch relative`}
      >
        {cardContent.map((text, index) => (
          <div
            key={index}
            className="relative "
            style={{ height: hoveredCard === index ? "auto" : "initial" }}
          >
            <div
              className={getCardStyles(index, hoveredCard === index)}
              style={{
                width: "100%",
                position: hoveredCard === index ? "absolute" : "relative",
                minHeight: "300px"
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() =>
                isMobile && setHoveredCard((prev) => (prev === index ? null : index))
              }
            >
              <img src={icons[index]} alt="" className="h-[150px] mb-2" />
              <p className="text-center w-full text-sm md:text-md lg:text-xl xl:text-2xl font-semibold">{text}</p>
              {hoveredCard === index && (
                <p className="mt-4 text-start text-xs md:text-lg w-full">
                  {expandedContent[index]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Preferences;
