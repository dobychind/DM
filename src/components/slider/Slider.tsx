import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './index.css';
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
      loop={true}
      //autoplay={{ delay: 3000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide className='h-screen'>
      <div className="flex bg-[url('/back.jpg')] flex-col max-h-screen bg- h-full  justify-center gap-12 items-center">
        <div className='flex mx-auto max-w-[95vw] justify-between items-center py-3 font-main'>
          <div className='flex gap-5'>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>Главная</p></a>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>О компании</p></a>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>Производство</p></a>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></a>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>Логистика</p></a>
            <a href="#"><p className='text-main text-2xl font-semibold hover:underline hover:text-blue'>Прочее</p></a>
          </div>
        </div>
          <img src={Logo} alt='' className='h-[250px]' />
          <h2 className=' text-main text-4xl text-center font-bold'>Группа компаний<br /><span className=' text-6xl'>"Даниэль М"</span></h2>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-[680px] relative">
        <div className=" bg-[url('/breadback.jpg')] bg-cover h-[680px]">
          <h3 className='text-5xl opacity-80 absolute bottom-[100px] left-[60px] text-white font-bold'>Собственное производство</h3>
          <div className='absolute bottom-[100px] right-[60px]'>
            <Button onClick={handleClick} text="Подробнее" />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="h-[680px] relative">
        <div className=" bg-[url('/log.jpeg')] h-[680px]">
          <h3 className='text-5xl opacity-80 absolute bottom-[100px] left-[60px] text-white font-bold'>Дистрибьюция и Логистика</h3>
          <div className='absolute bottom-[100px] right-[60px]'>
            <Button onClick={handleClick} text="Подробнее" />
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default App;
