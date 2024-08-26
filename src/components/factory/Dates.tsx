import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'


const Dates = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='w-full relative'>
            <div className='flex justify-between relative h-[910px] md:h-[770px]'>
                <div className='flex flex-col w-2/5 h-full gap-8 md:gap-0 md:justify-between pb-3 items-center md:items-start'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='max-w-[130px] md:max-w-full text-2xl md:text-4xl font-semibold text-main'>Февраль -март 2018г.:</p>
                    <p data-aos="zoom-in" data-aos-duration="1500" className='max-w-[130px] md:max-w-full text-2xl md:text-4xl font-semibold text-main'>Март 2018г.:</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='max-w-[130px] mr-auto ml-[16px] md:mx-0 md:max-w-full text-2xl mt-8 md:mt-0 md:text-4xl font-semibold text-main'>2019 г.:</p>
                    <p data-aos="zoom-in" data-aos-duration="2500" className='max-w-[130px] md:max-w-full text-2xl mt-10 md:mt-0 md:text-4xl font-semibold text-main'>2022-2023 гг.:</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[130px] mr-auto ml-[16px] md:mx-0 md:max-w-full text-2xl mt-24 md:mt-0 md:text-4xl font-semibold text-main'>2024 г.:</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[130px] md:max-w-full text-2xl mt-16 md:mt-0 md:text-4xl font-semibold text-main'>Февраль 2024 г.: </p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[130px] md:max-w-full text-2xl mt-12 md:mt-0 md:text-4xl font-semibold text-main'>Июль 2024 г.: </p>
                </div>
                <div className='absolute h-[910px] md:h-[770px] left-[40%] w-[2px] flex flex-col border-2 border-main'>
                    <div className='relative'>
                        <div data-aos="zoom-in" data-aos-duration="1000" className='absolute top-[-2px] left-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="1500" className='absolute top-[150px] md:top-[110px] left-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="2000" className='absolute top-[265px] md:top-[230px] right-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="2500" className='absolute top-[395px] md:top-[360px] left-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='absolute top-[575px] md:top-[480px] left-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='absolute top-[705px] md:top-[605px] right-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                        <div data-aos="zoom-in" data-aos-duration="3000" className='absolute top-[845px] md:top-[765px] left-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                    </div>
                </div>
                <div className='flex flex-col w-[55%] justify-between gap-8 items-center md:items-start'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Запуск производственной площадки в Санкт-Петербурге</p>
                    <p data-aos="zoom-in" data-aos-duration="1500" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Запуск площадки в Москве</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Вывод собственной продукции на рынок СЗФО и онлайн-ритейл (Озон, Яндекс Лавка, Самокат)</p>
                    <p data-aos="zoom-in" data-aos-duration="2500" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Расширение производственных площадей с 500 до 1500 кв. метров, увеличение объема производства в 2 раза</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Покупка всех производственных мощностей АО Новгородхлеб</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Начало производства ХПП №1 в Великом Новгороде с объемом 5-6 тонн</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='max-w-[170px] md:max-w-full text-m md:text-2xl font-normal text-black'>Увеличение мощности производства ХПП №1 в Великом Новгороде до 12-13 тонн.</p>
                </div>
            </div>
        </div>)
}

export default Dates