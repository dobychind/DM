import { useEffect } from 'react';
import ClientSwiper from './ClientSwiper';
import BreadDist from '/FoodDistrib.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Distribution = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="pb-16">
            <div className="flex w-full flex-col  mx-auto items-center justify-center xl:max-w-7xl">
                <h3 className='text-black text-5xl my-8 font-bold text-center'>Дистрибьюция</h3>
                <img data-aos="fade-down" data-aos-duration="2000" src={BreadDist} alt="" className='h-[60vh] object-cover w-full' />
                <div className='flex py-8 gap-12 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-black text-2xl leading-relaxed font-medium	'>
                            ГК «Даниэль М» на протяжении 10 лет занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей.
                            <br />
                            Мы не только обеспечиваем надежные поставки продукции, но и активно
                            способствовать развитию отрасли, внедряя инновационные подходы и технологии
                        </p>
                    </div>


                </div>
                <div className=''>
                    <h4 className='text-black text-5xl font-semibold text-center py-12'>Наши клиенты</h4>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="3000" >            
                <ClientSwiper />
            </div>
        </div>
    )
}

export default Distribution