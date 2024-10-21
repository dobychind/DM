import React from 'react';

interface ProductionCardProps {
  logo: string;
  name: string;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ logo, name }) => (
  <div className='flex flex-col bg-transparent w-full justify-end items-center h-full gap-4'>
    <img src={logo} alt={name} className='object-contain w-fit h-full max-h-[160px] md:max-h-[200px]' />
    <p className='text-black font-semibold text-xl md:w-max md:text-2xl xl:text-3xl text-center'>{name}</p>
  </div>
);

export default ProductionCard;
