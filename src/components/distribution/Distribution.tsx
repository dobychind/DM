import ClientSwiper from './ClientSwiper';
import BreadDist from '/FoodDistrib.jpg';

const Distribution = () => {
    return (
        <div className=" pb-16">
            <div className="flex w-full flex-col  mx-auto items-center justify-center xl:max-w-7xl">
                <h3 className='text-black text-7xl my-16 font-bold text-center'>Дистрибьюция</h3>
                <img src={BreadDist} alt="" className=''/>
                <div className='flex py-12 gap-12 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-black text-2xl leading-relaxed font-medium	'>
                            ГК «Даниэль М» на протяжении 10 лет занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей. 
                            <br/>
                            Мы не только обеспечиваем надежные поставки продукции, но и активно
                            способствовать развитию отрасли, внедряя инновационные подходы и технологии
                        </p>
                    </div>

                   
                </div>
                <div className=''>
                    <h4 className='text-black text-5xl font-semibold text-center py-12'>Наши клиенты</h4>
                </div>
            </div>
            <ClientSwiper />
        </div>
    )
}

export default Distribution
