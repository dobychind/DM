import React from 'react';
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center p-4 rounded-2xl border-2 border-[#CC7C3220] group hover:border-orange">
            {/* Ограничиваем размер изображения */}
            <div className="h-60 md:w-72 md:h-72 flex justify-center items-center overflow-hidden">
                <img
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col gap-1 mr-auto">
                <h2 className="text-lg md:text-2xl text-main font-bold">{product.name}</h2>
                <p className="text-base md:text-xl font-semibold">{product.category}</p>
                <p>{product.manufacturer}</p>
            </div>
        </div>
    );
};

export default ProductCard;
