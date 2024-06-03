import { useEffect } from 'react';
// import ClientSwiper from './ClientSwiper';
import BreadDist from '/FoodDistrib.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../button/Button';
import { Link } from 'react-router-dom';

const Distribution: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <div className="md:pb-8">
            <div ref={forwardRef} className="flex w-full flex-col px-4 mx-auto items-center justify-center md:px-0 lg:w-[70%]">
                <h3 className='text-black text-3xl mb-4 font-bold text-center md:my-8 md:text-5xl'>Дистрибьюция</h3>
                <img data-aos="fade-down" data-aos-duration="2000" src={BreadDist} alt="" className='rounded-xl object-cover w-full' />
                <div className='flex flex-col py-4 gap-4 justify-between md:py-8'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-black text-xl font-normal md:text-2xl md:leading-relaxed md:font-medium	2xl:text-4xl 2xl:leading-relaxed'>
                            ГК «Даниэль М» на протяжении 10 лет занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей.
                            <br />
                            Мы не только обеспечиваем надежные поставки продукции, но и активно
                            способствовать развитию отрасли, внедряя инновационные подходы и технологии
                        </p>
                    </div>
                    <div className='mt-auto ml-auto'>
                        <Link to="/distribution"><Button onClick={handleClick} text='Подробнее' /></Link>
                    </div>
                </div>
                {/* <div className=''>
                    <h4 className='text-black text-3xl py-4 font-semibold text-center md:py-12 md:text-5xl'>Наши клиенты</h4>
                </div> */}
            </div>
            {/* <div data-aos="fade-left" data-aos-duration="3000" >
                <ClientSwiper />
            </div> */}
        </div>
    )
}

export default Distribution
