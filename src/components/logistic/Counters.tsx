import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Counters = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="w-full flex flex-col gap-8 px-4 py-6 md:px-8 md:py-12 rounded-2xl bg-[url('/statLogistic.png')] bg-cover bg-no-repeat">
            <div className='flex gap-2 divide-y-2 divide-main md:divide-y-0 flex-col justify-between md:flex-row'>
                <div className='flex items-center w-full mb-4 md:mb-0 md:w-1/4 xl:w-1/3'>
                    <p className='font-medium text-xl md:text-2xl xl:text-3xl'>Логистика продуктов питания в Москве и МО, в Санкт-Петербурге и ЛО, а также в Великом Новгороде</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold md:font-bold text-2xl text-black'>Собираем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-semibold md:font-bold text-3xl'>4000</p>
                    <p className='font-semibold text-xl'>заказов в день</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold md:font-bold text-2xl text-black'>Маршрутизируем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-semibold md:font-bold text-3xl'>2000</p>
                    <p className='font-semibold text-xl'>адресов в день</p>
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='font-semibold md:font-bold text-2xl text-black'>Доставляем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-semibold md:font-bold text-3xl'>23 тонн</p>
                    <p className='font-semibold text-xl'>продукции в день</p>
                </div>
            </div>
        </div>
    )
}

export default Counters