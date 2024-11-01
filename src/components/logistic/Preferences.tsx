import React, { useEffect, useRef } from "react";
import car_top from '/car_top.png';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Preferences: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    Aos.init()
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
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex justify-center gap-8 md:gap-16 flex-col w-full overflow-hidden"
      ref={containerRef}
    >
      <h3 className="font-semibold text-main text-xl md:text-3xl 2xl:text-5xl md:w-2/3">
        Сотрудничество в рамках предоставляемого комплекса услуг системы 3PL включает:
      </h3>
      <div className="w-full flex flex-col gap-8 md:gap-24 justify-center items-end md:items-center relative">
        <img
          src={car_top}
          alt="Машина Даниэль вид сверху"
          ref={imgRef}
          className="h-[200px] md:h-auto absolute left-0 top-0 md:right-64 md:left-auto transition-transform duration-[1500ms] linear" // замедленная анимация 1.5s
        />
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-delay="0" data-aos-once="true" className="flex justify-center items-center gap-4 w-2/3 md:w-[40%] ">
          <p className="p-4 bg-white rounded-2xl font-bold text-main text-3xl">
            1
          </p>
          <p className="w-3/4 text-xl text-center p-4 bg-white rounded-2xl text-main 2xl:text-2xl font-normal">
            Приемка и хранение товара на складе
          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-once="true" data-aos-delay="300" className="flex justify-center items-center gap-4 w-2/3 md:w-[40%] ">
          <p className="p-4 bg-white rounded-2xl font-bold text-main text-3xl">
            2
          </p>
          <p className="w-3/4 text-xl text-center p-4 bg-white rounded-2xl text-main 2xl:text-2xl font-normal">
            Кросс-докинг  с транзитного склада на место постоянного хранения          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-once="true" data-aos-delay="600" className="flex justify-center items-center gap-4 w-2/3 md:w-[40%] ">
          <p className="p-4 bg-white rounded-2xl font-bold text-main text-3xl">
            3
          </p>
          <p className="w-3/4 text-xl text-center p-4 bg-white rounded-2xl text-main 2xl:text-2xl font-normal">
            Ведение оперативного
            и товарного учета с составлением первичной документации          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-once="true" className="flex justify-center items-center gap-4 w-2/3 md:w-[40%] ">
          <p className="p-4 bg-white rounded-2xl font-bold text-main text-3xl">
            4
          </p>
          <p className="w-3/4 text-xl text-center p-4 bg-white rounded-2xl text-main 2xl:text-2xl font-normal">
            Комплектация партий и заказов согласно указаниям клиента          </p>
        </div>
        <div data-aos="fade-down" data-aos-duration="3000" data-aos-once="true" className="flex justify-center items-center gap-4 w-2/3 md:w-[40%] ">
          <p className="p-4 bg-white rounded-2xl font-bold text-main text-3xl">
            5
          </p>
          <p className="w-3/4 text-xl text-center p-4 bg-white rounded-2xl text-main 2xl:text-2xl font-normal">
            Организация доставки товаров оптовым покупателям или в розничную сеть          
            </p>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
