import React from 'react';
import ProductionCard from './ProductionCard';
import Button from '../button/Button';
import HppLogo from '/HppLogo.png';
import DmLogo from '/DmLogo.png';
import NovLogo from '/NovHleb.png';
import RzevLogo from '/rzevka.png';


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

const Production: React.FC = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex flex-col bg-gradient-to-b from-white from-10% via-[#CC7C3280] to-white'>
      <h3 className='text-main text-5xl font-bold text-center'>Производство</h3>
      <div className='flex justify-between w-4/5 mx-auto py-16'>
        {productionData.map((item, index) => (
          <ProductionCard key={index} {...item} />
        ))}
      </div>
      <div className='grid grid-cols-3 grid-rows-3 gap-8 w-2/3 py-16 mx-auto'>

        <div className='bg-orange p-4 rounded-2xl flex justify-center items-center'>
          <p className='text-white text-center text-2xl font-semibold'>В 2018г. состоялся запуск собственного производства под брендом “ХПП №1”</p>
        </div>

        <div className="p-4 col-span-2 rounded-2xl flex justify-center bg-[url('/bread.jpg')] bg-cover min-h-[16rem] items-center" />

        <div className="bg-[url('/bread2.jpeg')] p-4 col-span-2 row-span-2 rounded-2xl flex justify-center h-full bg-cover min-h-[32rem] items-center" />

        <div className='bg-orange p-4 rounded-2xl flex justify-center items-center'>
          <p className='text-white text-center text-2xl font-semibold'>В 2018г. состоялся запуск собственного производства под брендом “ХПП №1”</p>
        </div>

        <div className="bg-[url('/production.png')] bg-cover bg-no-repeat p-4 rounded-2xl flex justify-end  min-h-[16rem] items-end">
          <Button color='orange' onClick={handleClick} text="Продукция"/>
        </div>

      </div>
    </div>
  );
};

export default Production;
