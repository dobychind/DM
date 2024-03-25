import React from 'react';
import Car from '/gazelle.png';
import Cars from '/cars.png';
import Threepl from '/3pl.png';
import Sklad from '/sklad.png';

const Logistic = () => {
    return (
        <div className='flex flex-col items-center justify-center mx-auto w-4/5'>
            <h3 className='text-main text-5xl font-bold text-center'>Логистика</h3>
            <div className='flex justify-between gap-6 items-center py-12'>
                <img src={Car} alt='brand car' className='' />
                <p className='text-main text-3xl w-3/5 font-semibold'>
                    В 2019г. произошел запуск проекта по оказанию логистических услуг на базе дистрибьюторского опыта.<br />
                    Наша логистическая компания специализируется на предоставлении высококачественных услуг по системе 3PL.
                </p>
            </div>
            <div className='flex justify-between gap-9 w-full'>
                <div className='w-full rounded-xl shadow-md p-4'>
                    <img src={Sklad} alt='' className='w-full'/>
                    <p className='text-main font-semibold text-xl py-4 text-center'>Склады в Москве, Санкт-Петербуге и Новгороде общей площадью 100000 м2</p>
                </div>

                <div className='w-full rounded-xl shadow-md p-4'>
                    <img src={Threepl} alt='' className='w-full'/>
                    <p className='text-main font-semibold text-xl py-4 text-center'>Поставки по системе 3PL</p>
                </div>

                <div className='w-full rounded-xl shadow-md p-4'>
                    <img src={Cars} alt='' className='w-full'/>
                    <p className='text-main font-semibold text-xl py-4 text-center'>Собственный автопарк 100 машин</p>
                </div>
            </div>
        </div>
    )
}

export default Logistic
