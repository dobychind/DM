import { useEffect } from 'react';
import ClientSwiper from './ClientSwiper';
// import BreadDist from '/FoodDistrib.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import MapPic from '/map.png'

const Distribution: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
    useEffect(() => {
        Aos.init();
    }, [])
    const handleClick = () => {
        console.log('Button clicked!');
    };
    return (
        <div className="md:pb-8 ">
            <div ref={forwardRef} className="flex w-full flex-col pt-6 px-3 bg-white rounded-2xl mx-auto items-center justify-center gap-12 md:px-0 lg:w-[85%]">
                <h3 className='text-black text-3xl md:mb-4 font-bold text-center md:my-8 md:text-5xl'>Дистрибьюция</h3>
                <div className='flex flex-col p-4 md:px-12 gap-12 justify-between md:py-8'>
                    <div className='flex flex-col-reverse md:flex-row-reverse gap-4 justify-between '>
                        <img data-aos="fade-down" data-aos-duration="2000" src={MapPic} alt="" className='rounded-xl md:w-1/2' />
                        <div className='flex justify-center items-center flex-col gap-4'>
                            <p className=' text-black text-xl font-normal md:text-2xl md:leading-normal md:font-medium	2xl:text-3xl 2xl:leading-normal'>
                                ГК Даниэль М  занимает важное положение в сфере дистрибуции хлеба в стратегически важных регионах России как Москва и Санкт-Петербург, а так же их областях.
                            </p>
                            <p className=' text-black text-xl font-normal md:text-2xl md:leading-normal md:font-medium	2xl:text-3xl 2xl:leading-normal'>С 2023 года мы успешно осуществляем дистрибьюцию в Великом Новгороде.</p>
                        </div>
                    </div>
                    <div>
                        <p className=' text-black text-xl font-normal md:text-2xl md:leading-normal md:font-medium	2xl:text-3xl 2xl:leading-normal'> Компания успешно продолжает наращивать свои достижения в этом ключевом секторе промышленности, демонстрируя стабильность и эффективность в своей деятельности.    </p>
                        <p className=' text-black text-xl font-normal md:text-2xl md:leading-normal md:font-medium	2xl:text-3xl 2xl:leading-normal'>Мы постоянно стремимся внести свой вклад в развитие индустрии дистрибуции хлеба в каждом регионе,
                            поддерживая высокие стандарты качества и надежности во всех аспектах нашей работы.</p>
                    </div>

                </div>
                <div className=''>
                    <h4 className='text-black text-3xl py-4 font-semibold text-center md:py-12 md:text-5xl'>Куда поставляем продукцию</h4>
                    <div className='p-4 md:px-12 pb-8' data-aos="fade-down" data-aos-duration="3000" >
                        <div className='grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-3 '>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl '>
                                <p className='text-2xl text-center font-semibold'>Государственные учреждения</p>
                            </div>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl '>
                                <p className='text-2xl text-center font-semibold'>Кейтеринговые комании</p>
                            </div>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl '>
                                <p className='text-2xl text-center font-semibold'>Корпоративные столовые</p>
                            </div>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl '>
                                <p className='text-2xl text-center font-semibold'>HoReCa</p>
                            </div>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl '>
                                <p className='text-2xl text-center font-semibold'>Федеральные и региональные сети</p>
                            </div>
                            <div className='px-6 flex justify-center items-center border-2 border-main rounded-2xl'>
                                <p className='text-2xl text-center font-semibold'>Розничные клиенты</p>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-8 max-w-full'>
                    <p className='text-center font-bold text-5xl '>Нам доверяют</p>
                    <div className='max-w-full'>
                        <ClientSwiper />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-duration="3000" className='pb-16 mt-auto px-4 md:px-8 ml-auto'>
                    <Link to="/distribution"><Button onClick={handleClick} text='Подробнее' /></Link>
                </div>


            </div>

        </div>
    )
}

export default Distribution
