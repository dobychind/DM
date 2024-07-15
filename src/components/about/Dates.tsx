import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Dates = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='lg:w-[70%]'>
            <div>
                <div className='flex w-full justify-between pb-3'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='text-5xl font-semibold text-main'>2012 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='text-5xl ml-12 font-semibold text-main'>2018 г.</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-5xl font-semibold text-main'>2023 г.</p>
                </div>
                <div className='w-full relative border-2 border-main'>
                    <div className='absolute left-[-2px] top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                    <div className='absolute left-[50%] top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                    <div className='absolute right-[-2px] top-[-8px] bg-main w-[16px] h-[16px] rounded-full'></div>
                </div>
                <div className='flex w-full justify-between pt-3'>
                    <p data-aos="zoom-in" data-aos-duration="1000" className='text-2xl font-normal text-black max-w-[280px]'>Начало работы Группы компаний "Даниэль М" в сфере производства хлебобулочных изделий</p>
                    <p data-aos="zoom-in" data-aos-duration="2000" className='text-2xl font-normal text-black max-w-[280px]'>Активное открытие производственных площадок в Москве и Санкт-Петербурге</p>
                    <p data-aos="zoom-in" data-aos-duration="3000" className='text-2xl font-normal text-black max-w-[210px]'>Восстановление завода в Великом Новгороде</p>
                </div>
            </div>
        </div>
    )
}

export default Dates