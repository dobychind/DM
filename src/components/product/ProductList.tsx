import React from 'react';
import { Product } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid px-2 md:px-4 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-x-16 md:gap-y-8 justify-center ">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
