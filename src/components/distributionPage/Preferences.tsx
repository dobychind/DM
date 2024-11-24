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
    "Прямые контракты с поставщиками",
    "Лидер в дистрибьюции",
    "Устойчивое присутствие на рынке",
    "Новаторы в онлайн-ритейле",
  ];

  const expandedContent = [
    "Обеспечиваем своевременную и точную передачу груза, оптимизируя ваши ресурсы.",
    "Товар поступает на наш логистический комплекс для оперативной обработки и контроля.",
    "Оформляем всю необходимую документацию — готовим полный пакет документов, гарантируя бесперебойное прохождение всех этапов.",
    "Организуем своевременное поступление товаров в назначенные точки с соблюдением всех требований.",
  ];


  const getCardStyles = (index: number, isHovered: boolean) => {
    const baseStyles = "flex justify-center flex-col items-center p-4 shadow-md rounded-xl transform transition-all duration-500";
    const hoverStyles = isHovered ? "shadow-lg scale-105 z-50" : "z-0";
    const backgroundStyles = index >= 1 && index <= 3 ? "bg-main text-white" : "bg-main text-white";

    return `${baseStyles} ${hoverStyles} ${backgroundStyles}`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 z-50">

      <div
        className={`grid gap-4 ${isMobile ? "grid-cols-1" : "grid-cols-4"
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
              <p className="text-start w-full text-sm md:text-md lg:text-xl xl:text-2xl font-semibold">{text}</p>
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
