import React from 'react';
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-4 rounded-2xl border-2 border-[#CC7C3220] group hover:border-main">
                <img className='w-full scale-90  group-hover:scale-100 transition-all duration-300' width={130} loading='lazy' height={130} src={product.image} alt={product.name} />   
            <div className='flex flex-col gap-1 mr-auto'>
                <h2 className='text-2xl text-main font-bold'>{product.name}</h2>
                <p className='text-xl font-semibold'>{product.category}</p>
                <p>{product.manufacturer}</p>
            </div>

        </div>
    );
};

export default ProductCard;
