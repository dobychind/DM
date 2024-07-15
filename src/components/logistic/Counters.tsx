import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Counters = () => {

    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <div className='w-full flex flex-col gap-8 border p-8 rounded-2xl bg-bg'>
            <p className='font-bold text-3xl'>Логистика продуктов питания в Москве и МО, в Санкт-Петербурге и ЛО, а также в Великом Новгороде</p>
            <div className='flex gap-2 divide-y-2 divide-main md:divide-y-0 flex-col justify-between md:flex-row'>
                <div className='flex flex-col'>
                    <p className='font-bold text-2xl text-black'>Собираем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-bold text-3xl'>1000</p>
                    <p className='font-semibold text-xl'>заказов в день</p>
                </div>
                <div className='flex flex-col border-'>
                    <p className='font-bold text-2xl text-black'>Маршрутизируем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-bold text-3xl'>300</p>
                    <p className='font-semibold text-xl'>адресов в день</p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-bold text-2xl text-black'>Доставляем</p>
                    <p className='font-normal text-xl'>более</p>
                    <p className='font-bold text-3xl'>15 тонн</p>
                    <p className='font-semibold text-xl'>продукции в день</p>
                </div>
            </div>
        </div>
    )
}

export default Counters