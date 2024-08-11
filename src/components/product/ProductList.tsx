import React from 'react';
import { Product } from '../../data/products';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <div className="grid px-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-16 gap-y-8 justify-center ">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
