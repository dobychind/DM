import React from 'react';
import { Product } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid grid-cols-4 gap-8 justify-center ">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
