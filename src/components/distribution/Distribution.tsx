import { useEffect } from 'react';
import ClientSwiper from './ClientSwiper';
// import BreadDist from '/FoodDistrib.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import MapPic from '/map.png'
import Stol from '/stol.png';
import Catering from '/catering.png';
import Horeca from '/horeca.png';

import Goverment from '/gov.png';



const Distribution: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <div className="">
            <div ref={forwardRef} className="flex w-full flex-col  px-8 py-16 bg-white rounded-2xl mx-auto items-center justify-center gap-12">
                <div className='flex flex-col w-full gap-12 justify-between'>
                    <div className='flex w-full flex-col-reverse lg:flex-row-reverse gap-12 justify-between '>
                        <img data-aos="fade-down" data-aos-duration="2000" src={MapPic} alt="" className='rounded-xl lg:w-1/2' />
                        <div className='flex justify-center 2xl:justify-around  items-center 2xl:items-start flex-col gap-12 2xl:max-w-[50vw]'>
                            <h3 className='text-main text-3xl font-bold text-center md:my-0 md:text-5xl'>Дистрибьюция</h3>
                            <div className='flex flex-col justify-evenly h-full'>
                                <p className=' text-black text-xl font-normal text-justify md:text-xl md:leading-normal md:font-medium	2xl:text-2xl 2xl:leading-normal'>
                                    Группа компаний “Даниэль М” — первый профессиональный дистрибьютор хлеба в России. Мы уже много лет обеспечиваем наших партнеров свежей продукцией и гарантируем надежные и быстрые поставки.
                                </p>
                                <p className=' text-black text-xl font-normal text-justify md:text-xl md:leading-normal md:font-medium	2xl:text-2xl 2xl:leading-normal'>На сегодняшний день мы ежедневно доставляем свежую продукцию в 4 000 торговых точек в Москве, Санкт-Петербурге и Великом Новгороде.
                                    Среди наших партнеров — федеральные сети, интернет-магазины, региональные локальные сети, независимые розничные магазины и предприятия сегмента HoReCa.
                                </p>
                            </div>
                            <Link to="/distribution"><Button onClick={handleClick} text='Подробнее' /></Link>

                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-6'>
                    <h4 className='text-black text-3xl font-medium text-start'>Почему выбирают нас: </h4>
                    <div data-aos="fade-down" data-aos-duration="3000" >
                        <div className='grid grid-cols-1 gap-6 md:gap-12 md:grid-cols-2 xl:grid-cols-4 '>
                            <div className='p-6 flex flex-col gap-4 justify-center items-center border border-main rounded-2xl '>
                                <img src={Goverment} className='w-[80px]' alt="" />
                                <p className='text-xl text-center font-medium'>Мы являемся профессионалами в области дистрибуции хлеба в России.</p>
                            </div>
                            <div className='p-6 flex flex-col gap-4 justify-center items-center border border-main rounded-2xl '>
                                <img src={Catering} className='w-[80px]' alt="" />
                                <p className='text-xl text-center font-medium'>Работаем с лучшими пекарнями и хлебозаводами, которые выпускают продукцию высшего качества.</p>
                            </div>
                            <div className='p-6 flex flex-col gap-4 justify-center items-center border border-main rounded-2xl '>
                                <img src={Stol} className='w-[80px]' alt="" />
                                <p className='text-xl text-center font-medium'>Наша собственная логистическая система позволяет доставлять хлеб быстро и своевременно.</p>
                            </div>
                            <div className='p-6 flex flex-col gap-4 justify-center items-center border border-main rounded-2xl '>
                                <img src={Horeca} className='w-[80px]' alt="" />
                                <p className='text-xl text-center font-medium'>Мы тщательно контролируем качество на всех этапах — от производства до доставки.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-8 '>
                    <p className='text-black text-3xl font-medium text-start'>Наши клиенты:</p>
                    <div className='max-w-full overflow-hidden'>
                        <ClientSwiper />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Distribution
