import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

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
    "Организуем сбор товаров на вашем складе",
    "Транспортируем в наш распределительный центр",
    "Оформляем необходимую документацию",
    "Проводим доставку по торговым точкам",
    "Предоставляем детализированный отчет",
  ];

  const expandedContent = [
    "Обеспечиваем своевременную и точную передачу груза, оптимизируя ваши ресурсы.",
    "Товар поступает на наш логистический комплекс для оперативной обработки и контроля.",
    "Оформляем всю необходимую документацию — готовим полный пакет документов, гарантируя бесперебойное прохождение всех этапов.",
    "Организуем своевременное поступление товаров в назначенные точки с соблюдением всех требований.",
    "Вы получаете полную прозрачность и точность информации по каждой поставке.",
  ];

  const icons = [
    "/packaging.svg",
    "/Truck.svg",
    "/print.png",
    "/deliver.png",
    "/report.svg",
  ];

  const getCardStyles = (index: number, isHovered: boolean) => {
    const baseStyles = "flex flex-col items-center p-4 shadow-md rounded-xl transform transition-all duration-500";
    const hoverStyles = isHovered ? "shadow-lg scale-105 z-10" : "z-0";
    const backgroundStyles = index >= 1 && index <= 3 ? "bg-[#ffa058] text-black" : "bg-white text-black";

    return `${baseStyles} ${hoverStyles} ${backgroundStyles}`;
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h3 className="font-semibold text-main text-lg md:text-3xl p-4 text-center">
        Этапы 3PL логистики
      </h3>
      <div
        className={`grid gap-4 ${
          isMobile ? "grid-cols-1" : "grid-cols-5"
        } w-full items-stretch relative`}
      >
        {cardContent.map((text, index) => (
          <div
            key={index}
            className="relative"
            style={{ height: hoveredCard === index ? "auto" : "initial" }}
          >
            <div
              className={getCardStyles(index, hoveredCard === index)}
              style={{
                width: "100%",
                position: hoveredCard === index ? "absolute" : "relative",
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onClick={() =>
                isMobile && setHoveredCard((prev) => (prev === index ? null : index))
              }
            >
              <img src={icons[index]} alt="" className="h-[150px] mb-2" />
              <p className="text-center text-sm md:text-2xl font-semibold">{text}</p>
              {hoveredCard === index && (
                <p className="mt-4 text-center text-xs md:text-lg p-2 w-full">
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
