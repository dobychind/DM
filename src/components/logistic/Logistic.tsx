import React, { useEffect } from 'react';
import Car from '/gazelle.png';
import Cars from '/gaz.jpeg';
import Threepl from '/3pl.jpg';
import Sklad from '/sklad.png';
import Button from '../button/Button';
import Delivery from '/deliver.png';
import Snowflake from '/snowflake.png';

import Aos from 'aos'
import 'aos/dist/aos.css'
import Services from './Services';
import { Link } from 'react-router-dom';
import FeedbackForm from './Form';
import Counters from './Counters';

const Logistic: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div ref={forwardRef} className='flex flex-col overflow-hidden bg-white items-center gap-8 justify-center mx-auto p-3 md:p-8 rounded-2xl lg:w-[75%]'>
            <h3 className='text-black text-3xl font-bold text-center md:text-5xl'>Логистические услуги по системе 3PL</h3>
            <div className='flex flex-col w-full justify-between p-4 lg:gap-6 items-center lg:flex-row md:py-12 md:pb-0'>
                <div className='w-full h-full'>
                    <img data-aos='fade-left' data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear" src={Car} alt='brand car' className='translate-x-full w-full h-full ease-in duration-[4000ms]' />
                </div>
                <div className='flex flex-col gap-6 lg:w-1/2'>
                    <p className='text-black font-normal text-xl lg:w-fit md:text-2xl md:font-medium 2xl:text-2xl 2xl:leading-normal'>
                        В 2019 году стартовал проект, основанный на нашем дистрибьюторском опыте, по предоставлению логистических услуг.
                        <br />Наша логистическая компания специализируется на оказании высококачественных услуг по системе 3PL.
                    </p>
                    <div>

                    </div>
                    <div className='ml-auto'>
                        <Link reloadDocument to="/logistic"> <Button onClick={handleClick} text='Подробнее' /></Link>
                    </div>
                </div>
            </div>

            <Counters/>

            <Services />

            

           

            <p className='text-3xl font-bold'>Доставка груза</p>
            <div className='grid grid-cols-1 w-4/5 md:w-full items-start justify-between gap-8 md:max-w-[70%] md:grid-cols-2 md:flex-row'>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <div className='max-h-[280px] h-full'>
                            <img src={Delivery} alt='' className='w-full h-[260px] object-contain rounded-xl ' />
                        </div>
                        <p className='text-main font-semibold text-2xl m-auto py-4 text-center'>Доставка груза до торговой точки</p>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <div className='h-full'>
                            <img src={Snowflake} alt='' className='w-full h-[260px] object-contain rounded-xl' />
                        </div>
                        <p className='text-main font-semibold text-xl my-auto py-4 text-center'>Собственные автомобили с рефрижератором и без него</p>
                    </div>

                </div>

            </div>

            <p className='text-3xl font-bold'>Наши преимущества</p>
            <div className='grid grid-cols-1 items-start justify-between gap-8 w-full md:grid-cols-3 md:flex-row'>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <div className='max-h-[280px] h-full'>
                            <img src={Threepl} alt='' className='w-full h-[200px] rounded-xl ' />
                        </div>
                        <p className='text-main font-semibold text-2xl m-auto py-4 text-center'>Создание оптимальных условий для хранения продуктов питания</p>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="2000" className='flex w-full bg-white rounded-xl shadow-md p-3 h-full items-center'>
                    <div className='w-full h-full flex flex-col justify-between'>
                        <div className='h-full'>
                            <img src={Cars} alt='' className='w-full  h-[200px] rounded-xl' />
                        </div>
                        <p className='text-main font-semibold text-xl my-auto py-4 text-center'>Собственный автопарк и погрузочно-разгрузочное оборудование</p>
                    </div>

                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className='flex w-full bg-white rounded-xl shadow-md h-full p-3 items-center'>
                    <div className='w-full h-full flex flex-col '>
                        <img src={Sklad} alt='' className='w-full h-[200px] rounded-xl' />
                        <p className='text-main font-semibold text-2xl m-auto py-4 text-center'>Склады в Москве, Санкт-Петербуге и Новгороде</p>
                    </div>

                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center'>
                <p className='font-light md:w-1/2'>Стоимость услуг оператора для каждого типа логистики рассчитывается индивидуально. 
                    <br />Для расчета обратитесь к менеджерам компании, заполнив форму или позвонив по телефону, указанному на сайте.</p>
                <FeedbackForm text='Консультация с логистом'/>    
            </div>
        </div>
    )
}

export default Logistic
