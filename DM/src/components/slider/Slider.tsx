import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay } from 'swiper/modules';
import Button from '../button/Button';
import Logo from '/DmLogo.svg';

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop = {true}
      autoplay={{ delay: 3000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide className='h-[680px]'>
        <div className='max-h-screen h-full flex justify-center gap-20 items-center'>
          <h2 className='text-main text-5xl font-bold'>Группа компаний<br /><span className='text-7xl'>Даниэль М</span></h2>
          <img src={Logo} alt='' className='h-[290px]'/>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-[680px] bg-[url('/bread.png')] bg-cover  relative">
        <div className="bg-[url('/bread.png')]">
          <div className='flex w-[90%] justify-between absolute bottom-[100px] left-[60px]'>
            <h3 className='text-5xl text-white font-bold'>Собственное производство</h3>
            <Button onClick={handleClick} text="Подробнее" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-[680px] bg-[url('/bread.png')] bg-cover  relative">
        <div className="bg-[url('/bread.png')]">
          <div className='flex w-[90%] justify-between absolute bottom-[100px] left-[60px]'>
            <h3 className='text-5xl text-white font-bold'>Собственное производство</h3>
            <Button onClick={handleClick} text="Подробнее" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default App;
