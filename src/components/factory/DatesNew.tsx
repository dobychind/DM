import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import chevronDown from '/chevron-black.svg';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
            loop
            // autoplay
            className='grid md:px-12'
            breakpoints={{
                320: { slidesPerView: 1 },
                560: { slidesPerView: 1, spaceBetween: 40 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1440: { slidesPerView: 4 },
            }}
        >
            {[{
                header: "2012",
                src_image: brslide1,
                subheader: "НАЧАЛО РАБОТЫ КОМПАНИИ \"ДАНИЭЛЬ М\"",
                content: "Начало работы Группы компаний \"Даниэль М\" в сфере производства хлебобулочных изделий."
            },
            {
                header: "Февраль 2018",
                src_image: brslide2,
                subheader: "ЗАПУСК ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКИ В САНКТ-ПЕТЕРБУРГЕ",
                content: "Запуск первой производственной площадки в Санкт-Петербурге. Внедрены современные линии производства, расширен ассортимент и усилено присутствие на местном рынке."
            },
            {
                header: "Март 2018",
                src_image: brslide4,
                subheader: "ЗАПУСК ПРОИЗВОДСТВЕННОЙ ПЛОЩАДКИ В МОСКВЕ",
                content: "Запуск второй производственной площадки в Москве, ориентированной на выпуск лаваша. Сокращены логистические издержки, повышена доступность продукции и внедрены новые стандарты контроля качества."
            },
            {
                header: "2019",
                src_image: brslide3,
                subheader: "ВЫВОД ПРОДУКЦИИ НА РЫНОК ОНЛАЙН РИТЕЙЛА",
                content: "Продукция компании появилась на крупнейших онлайн-платформах, таких как Ozon, Яндекс Лавка и Самокат, что расширило охват и укрепило взаимодействие с клиентами."
            },
            {
                header: "2022-2023",
                src_image: brslide5,
                subheader: "РАСШИРЕНИЕ ПРОИЗВОДСТВЕННЫХ ПЛОЩАДЕЙ",
                content: "Масштабное расширение производственных площадей — увеличение общей площади с 500 до 1500 кв. м. Удвоены объемы выпуска для удовлетворения растущего спроса на рынке."
            },
            {
                header: "Февраль 2024",
                src_image: brslide6,
                subheader: "ПОКУПКА ПРОИЗВОДСТВЕННЫХ МОЩНОСТЕЙ В АО \"НОВГОРОДХЛЕБ\"",
                content: "Приобретены производственные мощности АО \"Новгородхлеб\", что позволило значительно расширить линейку продукции и укрепить позиции в Великом Новгороде и других регионах."
            },
            {
                header: "Июль 2024",
                src_image: brslide7,
                subheader: "УВЕЛИЧЕНИЕ ПРОИЗВОДСТВЕННЫХ МОЩНОСТЕЙ В ВЕЛИКОМ НОВГОРОДЕ",
                content: "Завершено увеличение производственных мощностей ХПП №1 в Великом Новгороде, что повысило выпуск продукции до 12-13 тонн в сутки, обеспечивая гибкость в ответ на спрос."
            }].map((item, index) => (
                <SwiperSlide key={index} className="p-3 rounded-2xl min-h-[150px] h-full border border-gray-300 bg-white ">
                    <Accordion transition transitionTimeout={300}>
                        <AccordionItem
                            header={
                                <div className="accordion-header flex flex-col gap-2 justify-between text-2xl font-bold text-main">
                                    <img className='rounded-2xl' src={item.src_image} alt="" />

                                    <div className='flex w-full items-center justify-between'>
                                        <span className='text-3xl'>{item.header}</span>
                                        <span className={`transition-transform duration-300 ${expanded === index ? 'rotate-180' : 'rotate-0'}`}>
                                            <img src={chevronDown} alt="arrow down" />
                                        </span>
                                    </div>

                                    <div>
                                        <p className='text-black text-start text-xl font-medium'>{item.subheader}</p>
                                    </div>
                                </div>
                            }
                            buttonProps={{
                                className: "accordion-button text-4xl text-main font-semibold",
                                onClick: () => toggleAccordion(index)
                            }}
                            className="overflow-hidden"
                        >
                            <div className="accordion-content p-4 text-lg text-gray-700">
                                {item.content}
                            </div>
                        </AccordionItem>
                    </Accordion>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default DatesNew;
