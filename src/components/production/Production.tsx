import React, { useEffect } from 'react';
import ProductionCard from './ProductionCard';
import Button from '../button/Button';
import HppLogo from '/HppLogo.png';
import DmLogo from '/DmLogo.svg';
import Psen from '/psen.png'
import RzevLogo from '/rzevka.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';


interface ProductionDataItem {
  logo: string;
  name: string;
}

const productionData: ProductionDataItem[] = [
  { logo: HppLogo, name: 'ХПП №1' },
  { logo: DmLogo, name: 'Даниэль М' },
  { logo: RzevLogo, name: 'Ржевка' },
  { logo: Psen, name: 'Мастерская Пшеничного' }
];

const Production: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col  gap-4 w-full mx-auto md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8'>

        <div data-aos="flip-right" data-aos-duration="1500" className=' w-full rounded-2xl flex justify-center items-center md:col-span-2'>
          <div className='flex flex-col justify-around h-full'>
            <div className='flex w-full gap-8'>
              <h3 data-aos="fade-up" data-aos-duration="1000" className='text-main text-3xl font-semibold text-justify md:text-5xl'>Собственное производство</h3>
              <Link to="" ><Button color='main' onClick={handleClick} text="Продукция" /></Link>
            </div>
            <p className='border border-main rounded-2xl p-8 text-black text-jusstify text-xl md:text-2xl 2xl:text-2xl'>Мы гордимся тем, что наша компания обладает собственными современными производственными мощностями, которые оснащены современным оборудованием включают в себя несколько ключевых площадок в Москве, Санкт-Петербурге и Великом Новгороде.</p>
          </div>
        </div>

        <div className="p-4 hidden rounded-2xl justify-center bg-[url('/bread.jpg')] bg-cover min-h-[14rem] items-center xl:min-h-[20rem]  md:flex " />

        <div className="bg-[url('/bgbread.jpg')] p-4 col-span-2 row-span-2 rounded-2xl flex justify-center h-full bg-cover min-h-[28rem] xl:min-h-[34rem] items-center" />

        <div data-aos="flip-left" data-aos-duration="1500" className='border border-main rounded-2xl p-8 flex justify-center items-center'>
          <p className='text-black text-justify text-xl md:text-2xl 2xl:text-2xl '>Мы сочетаем традиции мастерства с новейшими технологиями, чтобы предложить нашим клиентам продукцию высочайшего качества</p>
        </div>

        <div className="bg-[url('/production.png')] hidden bg-cover bg-no-repeat p-4 rounded-2xl justify-end  min-h-[16rem] items-end md:flex">
        </div>

      </div>
      <div ref={forwardRef} className='flex flex-col gap-8'>
        <h3 data-aos="fade-up" data-aos-duration="1000" className='text-black text-3xl  font-bold text-center md:text-4xl'>Наши бренды</h3>
        <div data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-2 gap-4 items-center mx-auto md:grid-cols-4 md:pb-16 md:gap-16 xl:gap-36'>
          {productionData.map((item, index) => (
            <a className='max-w-[380px] flex flex-col  justify-between items-center h-full gap-4' href=""><ProductionCard key={index} {...item} /></a>
          ))}
        </div>
      </div>

      <div className='mx-auto'>
        <Link to="/production"><Button onClick={handleClick} text='Узнать больше' color='orange' /></Link>
      </div>
    </div>
  );
};

export default Production;