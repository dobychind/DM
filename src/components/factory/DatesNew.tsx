import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const DatesNew = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={5}
            navigation
            loop    
            autoplay
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='flex px-3 md:px-12 flex-wrap'
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                420: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4
                },
                1280: {
                    slidesPerView: 4
                }

            }}
        >   
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center  min-h-[150px] h-full'>
            <div className='text-5xl  min-[1920px]:text-7xl text-main'>2012 <p></p></div>
                <div className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Начало работы Группы компаний "Даниэль М" в сфере производства хлебобулочных изделий</div>
            </SwiperSlide>

            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center  min-h-[150px] h-full'>
                <div className='flex w-full items-center justify-around text-2xl min-[1920px]:text-4xl text-main'>Февраль - март<p className='text-5xl min-[1920px]:text-7xl'>2018</p></div>
                <div className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Запуск производственной площадки в Санкт-Петербурге</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='flex w-full items-center justify-around text-2xl  min-[1920px]:text-4xl text-main'>Март <p className='text-5xl min-[1920px]:text-7xl'>2018</p></div>
                <div className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Запуск площадки в Москве</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='text-5xl  min-[1920px]:text-7xl text-main'>2019 <p></p></div>
                <div  className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Вывод собственной продукции на рынок СЗФО и онлайн-ритейл (Озон, Яндекс Лавка, Самокат)</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='text-5xl  min-[1920px]:text-7xl text-main'>2022-2023</div>
                <div className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Расширение производственных площадей с 500 до 1500 кв. метров, увеличение объема производства в 2 раза</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='text-5xl  min-[1920px]:text-7xl text-main'>2024</div>
                <div  className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Покупка всех производственных мощностей АО Новгородхлеб</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='flex w-full items-center justify-around text-2xl  min-[1920px]:text-4xl text-main'>Февраль <p className='text-5xl min-[1920px]:text-7xl'>2024</p></div>
                <div  className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Начало производства ХПП №1 в Великом Новгороде с объемом 5-6 тонн</div>
            </SwiperSlide>
            <SwiperSlide className='flex flex-col gap-4 md:gap-6 items-center min-h-[150px] h-full'>
                <div className='flex w-full items-center justify-around text-2xl text-main  min-[1920px]:text-4xl'>Июль <p className='text-5xl min-[1920px]:text-7xl'>2024</p></div>
                <div  className='flex items-center justify-center w-full min-[1920px]:text-2xl'>Увеличение мощности производства ХПП №1 в Великом Новгороде до 12-13 тонн.</div>
            </SwiperSlide>

        </Swiper>
    )
}

export default DatesNew