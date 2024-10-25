import React, { useEffect } from 'react';
import aboutPic from '/aboutPic.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Counters from './Counters';
import DatesNew from '../factory/DatesNew';
// import Dates from './Dates';



const About: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div    className='flex flex-col my-auto w-full gap-10 mx-auto items-center md:gap-16 2xl:text-4xl'>


      <div ref={forwardRef} data-aos-once="true" data-aos="fade-down" data-aos-duration="1000" className='flex flex-col w-full mx-auto gap-4 md:gap-[12vw] md:max-h-[42vh] 2xl:gap-24 md:flex-row '>
        <div className='flex flex-col'>
          <h3 className='text-main text-3xl font-semibold  lg:text-5xl'>О компании</h3>
          <p className='text-black my-auto md:text-2xl lg:text-2xl font-normal leading-normal text-justify'>
            Мы – Группа компаний "Даниэль М", специализирующаяся на производстве, дистрибуции и логистике хлебобулочных изделий. <br />
            <p /> <br />
            Наше сотрудничество с партнерами строится на принципах открытости и надежности, что является основой нашего успеха и долгосрочных отношений
          </p>
        </div>

        <div className='lg:w-3/5 md:w-full'>
          <img src={aboutPic} alt='BreadPhoto' className='w-full h-full rounded-2xl object-cover' />
        </div>
      </div>
      <div className='max-w-full w-[96%] md:w-full overflow-hidden'>
        <DatesNew />

      </div>
      <Counters />
    </div>
  );
}

export default About;
