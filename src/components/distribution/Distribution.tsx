import ClientSwiper from './ClientSwiper'

const Distribution = () => {
    return (
        <div className=" py-16">
            <div className="flex  flex-col w-3/4 mx-auto items-center justify-center">
                <h3 className='text-black text-5xl font-bold text-center'>Дистрибьюция</h3>
                <div className='flex py-12 gap-12 justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className=' text-black text-2xl font-semibold'>
                            ГК «Даниэль М» занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей.
                        </p>
                        <p className=' text-black text-2xl font-semibold'>
                            Наша цель - не только обеспечить надежные поставки продукции, но и активно
                            способствовать развитию отрасли, внедряя инновационные подходы и технологии, придерживаясь высоких стандартов качества
                            и надежности во всех аспектах нашей деятельности.
                        </p>
                    </div>

                    <div className='bg-red-500 h-[260px] w-full'></div>
                </div>
                <div className=''>
                    <h4 className='text-black text-3xl font-bold text-center pb-8'>Наши клиенты</h4>
                </div>
            </div>
            <ClientSwiper />
        </div>
    )
}

export default Distribution
