import {useEffect} from 'react'
import Deliver from '/deliver.png';
import Save from '/save.png';
import Print from '/print.png';
import Package from '/package.png';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {
    useEffect(()=> {
        Aos.init()
    }, [])
    return (
        <div className='flex flex-col items-center justify-center'>
            <h4 className='text-black text-3xl font-bold text-center'>Предоставляемые услуги</h4>
            <div className='grid grid-cols-4 py-8 gap-8 '>
                <div data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-around gap-4 items-center p-3 py-6 rounded-3xl shadow-md'>
                    <img src={Deliver} alt='' />
                    <p className='font-semibold text-2xl text-main text-center'>Доставка в торговую точку</p>
                </div>
                <div data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md'>
                    <img className='w-[200px]' src={Save} alt='' />
                    <p className='font-semibold text-2xl text-main text-center'>Комплектование</p>
                </div> 
                <div data-aos="flip-left" data-aos-duration="2500" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md'>
                    <img className='w-[200px]' src={Print} alt='' />
                    <p className='font-semibold text-2xl text-main text-center'>Печать необходимых докуметов</p>
                </div>
                <div data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md box-border'>
                    <img className='w-[200px]' src={Package} alt='' />
                    <p className='font-semibold text-2xl text-main text-center'>Комплектование</p>
                </div>
            </div>
        </div>
    )
}

export default Services