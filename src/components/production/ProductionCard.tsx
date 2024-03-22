import React from 'react';

interface ProductionCardProps {
  logo: string;
  name: string;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ logo, name }) => (
  <div className='flex flex-col gap-4'>
    <img src={logo} alt={name} className='h-[210px]' />
    <p className='text-main font-bold text-3xl text-center'>{name}</p>
  </div>
);

export default ProductionCard;
