import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import chevronDown1 from '/chevron-black.svg';
import chevronDown2 from '/chevron-black.svg';
import chevronDown3 from '/chevron-black.svg';
import chevronDown4 from '/chevron-black.svg';
import chevronDown5 from '/chevron-black.svg';
import chevronDown6 from '/chevron-black.svg';
import chevronDown7 from '/chevron-black.svg';import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import brslide1 from '/brslide1.jpg';
import brslide2 from '/brslide2.jpg';
import brslide3 from '/brslide3.jpg';
import brslide4 from '/brslide4.jpg';
import brslide5 from '/brslide5.jpg';
import brslide6 from '/brslide6.jpg';
import brslide7 from '/brslide7.jpg';

const DatesNew = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            autoplay
            loop
            className='grid md:px-12'
            breakpoints={{
                320: { slidesPerView: 1 },
                560: { slidesPerView: 1, spaceBetween: 40 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
            }}
        >
            <SwiperSlide key={1} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide1} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>2012</span>
                                    <span className={`transition-transform duration-300 ${expanded === 0 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown1} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>НАЧАЛО РАБОТЫ КОМПАНИИ "ДАНИЭЛЬ М"</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(0)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Начало работы Группы компаний "Даниэль М" в сфере производства хлебобулочных изделий.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={2} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl object-contain h-[10vw]' src={brslide2} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>Февраль 2018</span>
                                    <span className={`transition-transform duration-300 ${expanded === 1 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown2} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>ЗАПУСК ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКИ В САНКТ-ПЕТЕРБУРГЕ</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(1)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Запуск первой производственной площадки в Санкт-Петербурге. Внедрены современные линии производства, расширен ассортимент и усилено присутствие на местном рынке.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={3} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide4} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>Март 2018</span>
                                    <span className={`transition-transform duration-300 ${expanded === 2 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown3} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>ЗАПУСК ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКИ В МОСКВЕ</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(2)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Запуск второй производственной площадки в Москве, ориентированной на выпуск лаваша. Сокращены логистические издержки, повышена доступность продукции и внедрены новые стандарты контроля качества.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={4} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide3} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>2019</span>
                                    <span className={`transition-transform duration-300 ${expanded === 3 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown4} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>ВЫВОД ПРОДУКЦИИ НА РЫНОК ОНЛАЙН РИТЕЙЛА</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(3)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Продукция компании появилась на крупнейших онлайн-платформах, таких как Ozon, Яндекс Лавка и Самокат, что расширило охват и укрепило взаимодействие с клиентами.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={5} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide5} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>2022-2023</span>
                                    <span className={`transition-transform duration-300 ${expanded === 4 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown5} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>РАСШИРЕНИЕ ПРОИЗВОДСТВЕННЫХ ПЛОЩАДЕЙ</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(4)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Масштабное расширение производственных площадей — увеличение общей площади с 500 до 1500 кв. м. Удвоены объемы выпуска для удовлетворения растущего спроса на рынке.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={6} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide6} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>Февраль 2024</span>
                                    <span className={`transition-transform duration-300 ${expanded === 5 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown6} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>ПОКУПКА ПРОИЗВОДСТВЕННЫХ МОЩНОСТЕЙ В АО "НОВГОРОДХЛЕБ"</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(5)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Приобретены производственные мощности АО "Новгородхлеб", что позволило значительно расширить линейку продукции и укрепить позиции в Великом Новгороде и других регионах.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>

            <SwiperSlide key={7} className="p-3 rounded-2xl min-h-[150px] h-full ">
                <Accordion transition transitionTimeout={300}>
                    <AccordionItem
                        header={
                            <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                <img className='rounded-2xl h-[10vw]' src={brslide7} alt="" />
                                <div className='flex w-full items-center justify-between'>
                                    <span className='text-3xl'>Июль 2024</span>
                                    <span className={`transition-transform duration-300 ${expanded === 6 ? 'rotate-180' : 'rotate-0'}`}>
                                        <img src={chevronDown7} alt="arrow down" />
                                    </span>
                                </div>
                                <div>
                                    <p className='text-black text-start text-xl font-medium'>УВЕЛИЧЕНИЕ ПРОИЗВОДСТВЕННЫХ МОЩНОСТЕЙ В ВЕЛИКОМ НОВГОРОДЕ</p>
                                </div>
                            </div>
                        }
                        buttonProps={{
                            className: "accordion-button text-4xl text-main font-semibold",
                            onClick: () => toggleAccordion(6)
                        }}
                        className="overflow-hidden"
                    >
                        <div className="accordion-content p-4 text-lg text-gray-700">
                            Завершено увеличение производственных мощностей ХПП №1 в Великом Новгороде, что повысило выпуск продукции до 12-13 тонн в сутки, обеспечивая гибкость в ответ на спрос.
                        </div>
                    </AccordionItem>
                </Accordion>
            </SwiperSlide>
        </Swiper>
    );
}

export default DatesNew;
