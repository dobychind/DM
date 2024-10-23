import { useEffect } from 'react'
import Diamond from '/diamond.png';
import Save from '/save.png';
import Print from '/print.png';
import Package from '/package.png';
import Delivery from '/deliver.png';
import Snowflake from '/snowflake.png';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Services = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className='flex flex-col gap-4 md:px-8 justify-start w-full'>
            <h4 data-aos="fade-down" className='text-black text-2xl md:text-3xl text-start font-medium'>Ответственное хранение и доставка груза</h4>
            <div data-aos="fade-down" data-aos-duration="1500" className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 md:gap-4 md:px-8 '>

                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8 border border-main rounded-2xl box-border'>
                    <img className=' object-cover w-full max-w-[80px]' src={Package} alt='' />
                    <p className='font-semibold text-lg text-wrap md:text-2xl text-black text-start'>Прием груза согласно документации</p>
                </div>

                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8  border border-main rounded-2xl'>
                    <img src={Diamond} className='object-cover w-full max-w-[80px]' alt='' />
                    <p className=' font-medium text-lg md:text-2xl text-black text-start'>Размещение материальных ценностей</p>
                </div>

                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8 border border-main rounded-2xl'>
                    <img className='object-cover w-full max-w-[80px]' src={Print} alt='' />
                    <p className=' font-medium text-lg md:text-2xl w-max text-black text-start'>Составление сопроводительных документов</p>
                </div>

                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8 border border-main rounded-2xl'>
                    <img className='object-cover w-full max-w-[80px]' src={Save} alt='' />
                    <p className=' font-medium text-lg md:text-2xl text-black text-start'>Отгрузка со склада для отправки получателю</p>
                </div>
                
                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8 border border-main rounded-2xl'>
                    <img className='object-cover w-full max-w-[80px]' src={Delivery} alt='' />
                    <p className=' font-medium text-lg md:text-2xl text-black text-start'>Доставка груза до торговой точки</p>
                </div>
                <div className='flex bg-white justify-start gap-6 items-center p-4 md:px-8 border border-main rounded-2xl box-border'>
                    <img className=' object-cover w-full max-w-[80px]' src={Snowflake} alt='' />
                    <p className='font-medium text-lg text-wrap md:text-2xl text-black text-start'>Собственные автомобили с рефрижератором и без него</p>
                </div>


            </div>
        </div>
    )
}

export default Services
