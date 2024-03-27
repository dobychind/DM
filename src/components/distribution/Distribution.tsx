import ClientSwiper from './ClientSwiper'

const Distribution = () => {
    return (
        <div>
        <div className='flex flex-col w-4/5 mx-auto items-center justify-center'>
            <h3 className='text-main text-5xl font-bold text-center'>Дистрибьюция</h3>
            <div className='flex py-12 justify-between'>
                <p className='w-3/5 text-main text-xl font-semibold'>ГК «Даниэль М» занимает ключевую позицию в отрасли дистрибуции хлеба на территории Москвы, Санкт-Петербурга и их областей.
                    <br />Наша цель - не только обеспечить надежные поставки продукции, но и активно
                    способствовать развитию отрасли, внедряя инновационные подходы и технологии, придерживаясь высоких стандартов качества
                    и надежности во всех аспектах нашей деятельности.
                </p>
                <div className='bg-red-500 h-[260px] w-1/3'></div>
            </div>
            <div className=''>
                <h4 className='text-main text-3xl font-bold text-center pb-8'>Наши клиенты</h4>
            </div>
        </div>
        <ClientSwiper/>
        </div>
    )
}

export default Distribution
