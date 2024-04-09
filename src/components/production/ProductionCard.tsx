import React from 'react';

interface ProductionCardProps {
  logo: string;
  name: string;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ logo, name }) => (
  <div className='flex flex-col w-full justify-between h-full gap-4'>
    <img src={logo} alt={name} className='' />
    <p className='text-black font-semibold text-xl md:text-2xl xl:text-3xl text-center'>{name}</p>
  </div>
);

export default ProductionCard;
