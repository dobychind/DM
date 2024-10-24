import React from 'react';

interface ProductionCardProps {
  logo: string;
  name: string;
  delay: string;
}

const ProductionCard: React.FC<ProductionCardProps> = ({ logo, name, delay }) => (
  <div data-aos="fade-down" data-aos-once="true" data-aos-duration="3000" data-aos-delay={delay} className='flex flex-col bg-transparent w-full justify-end items-center h-full gap-4'>
    <img src={logo} alt={name} className='object-contain w-fit h-full max-h-[160px] md:max-h-[200px]' />
    <p className='text-black font-semibold text-xl md:w-max md:text-2xl xl:text-3xl text-center'>{name}</p>
  </div>
);

export default ProductionCard;
