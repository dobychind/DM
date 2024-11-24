import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import darnica from '/darnica.png';
import hlebdom from '/hlebdom.svg';
import kolomn from '/kolomn.png';
import karavay from '/karavay.svg';
import Okey from '/okey.png';
import rzevka from '/rzevka.png';
import Lavka from '/Lavka.png';
import volpec from '/volpec.png';

import './index.css';
import 'swiper/css';

import 'swiper/css/navigation';

const ClientSwiperLog = () => {
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
            className='swiper-container'
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                420: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 5,
                },
            }}
        >
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={darnica} alt='Lenta' className='h-full max-h-[150px] object-cover grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={kolomn} alt='Samokat' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={Lavka} alt='Lavka' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={karavay} alt='Lenta' className='h-full max-h-[150px] object-cover grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={hlebdom} alt='Auchan' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={volpec} alt='Dixy' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={rzevka} alt='Spar' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center h-[180px]'>
                <img src={Okey} alt='Okey' className='h-full max-h-[150px] object-contain grayscale hover:grayscale-0' />
            </SwiperSlide>
            
        </Swiper>
    );
};

export default ClientSwiperLog;