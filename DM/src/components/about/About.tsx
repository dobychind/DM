import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col bg-gradient-to-b from-white via-[#71B4BE77] to-white items-center'>
            <h3 className='text-main text-5xl font-bold text-center'>О компании</h3>
            <div className='flex w-4/5 mx-auto py-12 items-center justify-between'>
                <p className='text-main w-1/2 text-3xl font-semibold'>
                    Группа компаний “Даниэль М” специализируется в логистике, дистрибьюции и производстве хлебобулочных изделий.
                    Основные принципы нашего взаимодействия с партнерами - это принципы открытости и надежности.
                </p>
                <div className='bg-slate-600 w-[420px] h-[400px] rounded-3xl'></div>

            </div>
            <div className='grid grid-cols-2 w-4/5 gap-x-12 gap-y-8'>
                <div className=' border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <span className='text-5xl text-main font-bold'> &#62;</span>
                    <span className='text-blue text-6xl font-bold'>200</span> <br />
                    Cотрудников работают в нашей компании
                </div>
                <div className=' border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <span className='text-5xl text-main font-bold'> &#62;</span>
                    <span className='text-blue text-6xl font-bold'>100</span> <br />
                    Автомобилей в собственном парке
                </div>
                <div className=' border-2 p-4 border-blue rounded-3xl font-bold text-main text-xl'>
                    <span className='text-blue text-6xl font-bold'>3</span> <br />
                    Филлиала в Москве, Санкт-Петербурге и Новгороде
                </div>
                <div className=' border-2 p-4 border-blue rounded-3xl font-bold text-main text-2xl'>
                    <span className='text-5xl text-main font-bold'> &#62;</span>
                    <span className='text-blue text-6xl font-bold'>200</span> <br />
                    Cотрудников работают в нашей компании
                </div>
            </div>
        </div>
    )
}

export default About