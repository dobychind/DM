import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Button from '../button/Button';
import Logo from '/DmLogo.svg';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='h-[680px]'>
        <div className='max-h-screen h-full flex justify-center gap-20 items-center'>
          <h2 className='text-main text-5xl font-bold'>Группа компаний<br /><span className='text-7xl'>Даниэль М</span></h2>
          <img src={Logo} alt='' />
        </div>
      </SwiperSlide>

      <SwiperSlide className='h-[680px] relative'>
        <div className=''>
          <div className='absolute bottom-[100px] left-[60px]'>
            <h3 className='text-5xl text-main font-bold'>Логистические услуги</h3>
            <Button onClick={handleClick} text="Нажми меня" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>Slide 3</SwiperSlide>

    </Swiper>
  );
};

export default App;
