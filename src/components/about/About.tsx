import React, { useEffect } from 'react';
import FoodAbout from '/FoodAbout.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Counters from './Counters';
import Dates from './Dates';



const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div data-aos="fade-down" data-aos-duration="1000" className='flex px-4 flex-col my-auto w-full gap-4 mx-auto bg-bg items-center md:py-8 md:gap-24 2xl:text-4xl'>

      <h3 className='text-black text-4xl font-bold text-center lg:text-5xl'>О компании</h3>

      <div ref={forwardRef} data-aos="fade-right" data-aos-duration="2000" className='flex flex-col w-full mx-auto gap-4 md:gap-8 md:max-h-[42vh]  lg:w-[70%] 2xl:gap-16 md:flex-row '>
        <p className='text-black my-auto md:text-2xl lg:text-2xl font-semibold leading-normal text-center md:text-start md:w-fit lg:w-1/2'>
        Мы – Группа компаний "Даниэль М", специализирующаяся на логистике, дистрибуции и производстве хлебобулочных изделий. <br />
        Наше сотрудничество с партнерами строится на принципах открытости и надежности, что является основой нашего успеха и долгосрочных отношений
        </p>
        <div className='lg:w-3/5 md:w-full'>
          <img src={FoodAbout} alt='BreadPhoto' className='w-full h-full rounded-2xl object-cover' />
        </div>
      </div>
      <Dates/>
      <Counters/>
    </div>
  );
}

export default About;
