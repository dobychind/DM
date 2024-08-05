import React from 'react';
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>{product.manufacturer}</p>
        </div>
    );
};

export default ProductCard;
