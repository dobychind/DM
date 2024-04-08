import React, { useEffect } from 'react';
import Car from '/gazelle.png';
import Cars from '/gaz.jpeg';
import Threepl from '/3pl.jpg';
import Sklad from '/sklad.png';
import Button from '../button/Button';

import Aos from 'aos'
import 'aos/dist/aos.css'
import Services from './Services';
import { Link } from 'react-router-dom';

const Logistic: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    useEffect(()=> {
        Aos.init()
    }, [])

    return (
        <div ref={forwardRef} className='flex flex-col overflow-hidden bg-bg items-center gap-8 justify-center mx-auto px-4 '>
            <h3 className='text-black text-3xl font-bold text-center md:text-5xl'>Логистика</h3>
            <div className='flex flex-col w-full justify-between py-4 md:gap-6 items-center md:flex-row md:py-12'>
                <img data-aos='fade-left' data-aos-duration="2000"  data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear" src={Car} alt='brand car' className=' translate-x-full ease-in duration-[4000ms] ' />
                <div className='flex flex-col gap-6'>
                    <p className='text-black font-normal text-xl w-full md:text-2xl md:font-medium'>
                        В 2019г. произошел запуск проекта по оказанию логистических услуг на базе дистрибьюторского опыта.<br />
                        Наша логистическая компания специализируется на предоставлении высококачественных услуг по системе 3PL.
                    </p>
                    <div className=''>
                       <Link to="/logistic"> <Button onClick={handleClick} text='Подробнее' /></Link>
                    </div>
                </div>
            </div>



            <div className='grid grid-cols-1 items-start justify-between gap-9 w-full md:grid-cols-3 md:flex-row'>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <img src={Threepl} alt='' className='w-full h-full rounded-xl object-cover' />
                        <p className='text-main font-semibold text-2xl m-auto py-4 text-center'>Поставки по системе 3PL</p>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <img src={Cars} alt='' className='w-full h-full object-cover rounded-xl' />
                        <p className='text-main font-semibold text-2xl my-auto py-4 text-center'>Собственный автопарк</p>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className='flex w-full bg-white rounded-xl shadow-md h-full p-3 items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <img src={Sklad} alt='' className='w-full h-full rounded-xl object-cover' />
                        <p className='text-main font-semibold text-xl m-auto py-4 text-center'>Склады в Москве, Санкт-Петербуге и Новгороде</p>
                    </div>

                </div>
            </div>

            <Services/>
        </div>
    )
}

export default Logistic
