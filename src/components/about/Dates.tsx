import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Dates = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='w-full'>
            <div className="flex gap-2 md:gap-0 md:flex-col">
                <div className='flex flex-col md:flex-row w-full gap-8 md:gap-0 justify-between pb-3'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='text-2xl md:text-5xl font-semibold text-main'>2012 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='text-2xl md:text-5xl font-semibold text-main'>2018 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl md:text-5xl font-semibold text-main'>2023 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl md:text-5xl font-semibold text-main'>2023 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl md:text-5xl font-semibold text-main'>2023 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl md:text-5xl font-semibold text-main'>2023 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl md:text-5xl font-semibold text-main'>2023 г.</p>
                </div>
                <div className='md:w-full relative border-2 border-main'>
                    <div className='absolute left-[-8px] md:left-[-2px] top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                    <div className='absolute top-1/2 left-[-8px] md:left-[50%] md:top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                    <div className='absolute top-[98%] left-[-8px] md:left-auto md:right-[-2px] md:top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                </div>
                <div className='flex flex-col md:flex-row w-full gap-8 md:gap-0 justify-between pt-3'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='md:text-2xl font-normal text-black max-w-[280px]'>Начало работы Группы компаний "Даниэль М" в сфере производства хлебобулочных изделий</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='md:text-2xl font-normal text-black max-w-[280px]'>Активное открытие производственных площадок в Москве и Санкт-Петербурге</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='md:text-2xl font-normal text-black max-w-[210px]'>Восстановление завода в Великом Новгороде</p>
                </div>
            </div>
        </div>
    )
}

export default Dates