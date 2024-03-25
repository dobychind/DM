import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Auchan from '/auchan.png';
import Dixy from '/dixy.png';
import Lenta from '/lenta.jpg';
import Spar from '/spar.jpg';
import Okey from '/okey.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='flex px-10'
        >
            <SwiperSlide className='flex items-center h-[200px] py-4'><img src={Lenta} alt='Lenta' className=''/></SwiperSlide>
            <SwiperSlide className='flex h-[200px] items-center justify-center'><img src={Auchan} alt='Lenta' className=''/></SwiperSlide>
            <SwiperSlide className='flex h-[200px] items-center justify-center'><img src={Dixy} alt='Lenta' className='h-[200px]'/></SwiperSlide>
            <SwiperSlide className='flex h-[200px] items-center justify-center'><img src={Spar} alt='Lenta' className='h-[200px]'/></SwiperSlide>
            <SwiperSlide className='flex h-[200px] items-center justify-center'><img src={Okey} alt='Lenta' className='h-[200px]'/></SwiperSlide>
        </Swiper>
    );
};