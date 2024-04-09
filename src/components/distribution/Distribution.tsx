import { useEffect } from 'react';
import ClientSwiper from './ClientSwiper';
import BreadDist from '/FoodDistrib.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Distribution: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="pb-8">
            <div ref={forwardRef} className="flex w-full flex-col px-4 mx-auto items-center justify-center md:px-0 lg:w-[90%]">
                <h3 className='text-black text-3xl mb-4 font-bold text-center md:my-8 md:text-5xl'>Дистрибьюция</h3>
                <img data-aos="fade-down" data-aos-duration="2000" src={BreadDist} alt="" className='md:h-[60vh] rounded-xl object-cover w-full' />
                <div className='flex py-4 gap-8 justify-between md:py-8 md:gap-12'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-black text-xl font-normal md:text-2xl md:leading-relaxed md:font-medium	'>
                            ГК «Даниэль М» на протяжении 10 лет занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей.
                            <br />
                            Мы не только обеспечиваем надежные поставки продукции, но и активно
                            способствовать развитию отрасли, внедряя инновационные подходы и технологии
                        </p>
                    </div>


                </div>
                <div className=''>
                    <h4 className='text-black text-3xl py-4 font-semibold text-center md:py-12 md:text-5xl'>Наши клиенты</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" >            
                <ClientSwiper />
            </div>
        </div>
    )
}

export default Distribution
