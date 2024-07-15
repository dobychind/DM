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
        <div className='flex flex-col items-center justify-center w-full'>
            <h4 className='text-black text-3xl font-bold text-center'>Ответственное хранение</h4>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-4 py-8 md:gap-8 '>
                <div data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-around gap-4 items-center p-3 py-6 rounded-3xl shadow-md'>
                    <img src={Deliver} className='object-cover ' alt='' />
                    <p className='md:font-semibold font-medium text-lg md:text-2xl text-main text-center'>Размещение материальных ценностей</p>
                </div>
                <div data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md'>
                    <img className='object-cover w-[160px] md:w-[200px]' src={Save} alt='' />
                    <p className='md:font-semibold font-medium text-lg md:text-2xl text-main text-center'>Отгрузка изделий со склада для отправки получателю</p>
                </div> 
                <div data-aos="flip-left" data-aos-duration="2500" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md'>
                    <img className='object-cover w-[160px] md:w-[200px]' src={Print} alt='' />
                    <p className='md:font-semibold break-all font-medium text-lg md:text-2xl text-main text-center'>Составление сопроводительных документов</p>
                </div>
                <div data-aos="flip-left" data-aos-duration="3000" data-aos-anchor-placement="bottom-bottom" className='flex flex-col bg-white justify-center gap-4 items-center p-3 rounded-3xl shadow-md box-border'>
                    <img className=' object-cover w-[160px] md:w-[200px] ' src={Package} alt='' />
                    <p className='font-semibold text-lg text-wrap md:text-2xl text-main text-center'>Прием груза согласно документации</p>
                </div>
            </div>
        </div>
    )
}

export default Services
