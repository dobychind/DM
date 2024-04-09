import React, {useEffect} from 'react';
import ProductionCard from './ProductionCard';
import Button from '../button/Button';
import HppLogo from '/HppLogo.png';
import DmLogo from '/DmLogo.svg';
import NovLogo from '/NovHleb.png';
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
  { logo: NovLogo, name: 'Новгородхлеб' },
  { logo: RzevLogo, name: 'Ржевка' }
];

const Production: React.FC<{ forwardRef: React.RefObject<HTMLDivElement> }> = ({ forwardRef }) => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  useEffect(() =>
  {
    Aos.init();
  }, [])
  return (
    <div  ref={forwardRef} className='flex flex-col px-4 bg-gradient-to-b from-bg from-10% via-[#CC7C3280] to-bg '>
      <h3 data-aos="fade-up" data-aos-duration="1000" className='text-black text-3xl font-bold text-center md:text-5xl'>Производство</h3>
      <div data-aos="fade-up" data-aos-duration="1000" className='grid grid-cols-2 gap-4 pt-8 mx-auto lg:w-[90%] md:grid-cols-4 md:py-16 md:gap-16 xl:gap-36'>
        {productionData.map((item, index) => (
          <a className='' href=""><ProductionCard key={index} {...item}/></a>
        ))}
      </div>
      <div className='flex flex-col  gap-4 w-full py-8 mx-auto md:grid md:grid-cols-3 md:grid-rows-3 md:gap-8 lg:w-[70%]'>

        <div data-aos="flip-right" data-aos-duration="1500" className='bg-orange w-full p-4 rounded-2xl flex justify-center items-center'>
          <p className='text-white text-center text-xl md:text-2xl'>В 2018г. состоялся запуск собственного производства под брендом “ХПП №1”</p>
        </div>

        <div className="p-4 hidden rounded-2xl justify-center bg-[url('/bread.jpg')] bg-cover min-h-[14rem] items-center md:flex md:col-span-2" />

        <div className="bg-[url('/bgbread.jpg')] p-4 col-span-2 row-span-2 rounded-2xl flex justify-center h-full bg-cover min-h-[28rem] items-center" />

        <div data-aos="flip-left" data-aos-duration="1500" className='bg-orange p-4 rounded-2xl flex justify-center items-center'>
          <p className='text-white text-center text-xl md:text-2xl'>В 2018г. состоялся запуск собственного производства под брендом “ХПП №1”</p>
        </div>

        <div className="bg-[url('/production.png')] bg-cover bg-no-repeat p-4 rounded-2xl flex justify-end  min-h-[16rem] items-end">
          <Link to="" ><Button color='orange' onClick={handleClick} text="Продукция"/></Link>
        </div>

      </div>
        
      <div className='mx-auto'>
        <Link to="/production"><Button onClick={handleClick} text='Узнать больше' color='orange'/></Link>
      </div>
    </div>
  );
};

export default Production;
