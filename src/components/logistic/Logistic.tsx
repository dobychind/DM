import React, { useEffect } from 'react';
import Car from '/gazelle.png';
import Cars from '/gaz.jpeg';
import Threepl from '/3pl.jpg';
import Sklad from '/sklad.png';
import Button from '../button/Button';

import Aos from 'aos'
import 'aos/dist/aos.css'
import Services from './Services';
import { Link } from 'react-router-dom';
// import FeedbackForm from './Form';
import Counters from './Counters';

const Logistic: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    const handleClick = () => {
        console.log('Button clicked!');
    };
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div data-aos="fade-down" data-aos-duration="3000" ref={forwardRef} className='flex flex-col overflow-hidden bg-white items-center gap-24 justify-center mx-auto p-3 md:p-8 rounded-2xl'>
            <div className='flex flex-col w-full justify-between p-4 lg:gap-6 items-center lg:flex-row md:py-12 md:pb-0'>
                <div className='w-1/3 h-full'>
                    <img data-aos='fade-left' data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom" data-aos-easing="linear" src={Car} alt='brand car' className='translate-x-full w-full h-full ease-in duration-[4000ms]' />
                </div>
                <div className='flex flex-col gap-6 lg:w-2/3'>
                    <h3 className='text-main text-xl font-bold md:text-5xl'>Логистические услуги по системе 3PL</h3>

                    <p className='text-black font-normal text-xl lg:w-fit md:text-2xl md:font-medium min-[1920px]:text-2xl min-[1920px]:leading-normal'>
                        В 2019 году стартовал проект, основанный на нашем дистрибьюторском опыте, по предоставлению логистических услуг.
                        <br />Наша логистическая компания специализируется на оказании высококачественных услуг по системе 3PL.
                    </p>
                    <div>

                    </div>
                    <div className='ml-auto'>
                        <Link to="/logistic"> <Button onClick={handleClick} text='Подробнее' /></Link>
                    </div>
                </div>
            </div>

            <Counters />

            <Services />
            <div className='flex flex-col gap-8'>

                <p className='text-3xl font-bold'>Наши преимущества</p>
                <div className='grid grid-cols-1 gap-8 w-full md:grid-cols-3'>
                    {[
                        {
                            src: Threepl,
                            alt: 'Оптимальные условия хранения',
                            text: 'Создание оптимальных условий для хранения продуктов питания',
                            duration: '1000',
                        },
                        {
                            src: Cars,
                            alt: 'Собственный автопарк',
                            text: 'Собственный автопарк и погрузочно-разгрузочное оборудование',
                            duration: '2000',
                        },
                        {
                            src: Sklad,
                            alt: 'Складские помещения',
                            text: 'Склады в Москве, Санкт-Петербурге и Новгороде',
                            duration: '3000',
                        },
                    ].map(({ src, alt, text, duration }) => (
                        <div
                            key={alt}
                            data-aos="fade-down"
                            data-aos-duration={duration}
                            className='flex w-full h-full items-start'
                        >
                            <div className='w-full flex flex-col justify-between items-center'>
                                {/* Фиксированная высота для изображения */}
                                <div className='w-full max-h-[300px] h-[300px]'>
                                    <img
                                        src={src}
                                        alt={alt}
                                        className='w-full h-full object-cover rounded-xl'
                                    />
                                </div>
                                {/* Текстовый блок с margin и padding для центрирования */}
                                <p className='text-main font-normal text-xl w-2/3 py-4 text-center'>
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center'>
                <p className='font-light md:w-1/2'>Стоимость услуг оператора для каждого типа логистики рассчитывается индивидуально.
                    <br />Для расчета обратитесь к менеджерам компании, заполнив форму или позвонив по телефону, указанному на сайте.</p>
                <FeedbackForm text='Консультация с логистом' />
            </div> */}
        </div>
    )
}

export default Logistic
