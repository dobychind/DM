import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { products as initialProducts } from '../data/products';
import ProductList from '../components/product/ProductList';
import ProductFilter from '../components/product/ProductFilter';
import Navbar from "../components/navbar/Navbar";
import Navigation from '../components/nav/Navigation';

const typeMapping: { [key: string]: string } = {
  'Кондитерские изделия': 'confectionery',
  'Свежий хлеб': 'bread',
  'confectionery': 'Кондитерские изделия',
  'bread': 'Свежий хлеб'
};

const Production: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('');
  const location = useLocation();

  // Извлекаем тип из URL (например, /production/confectionery)
  const pathParts = location.pathname.split('/');
  const type = pathParts[pathParts.length - 1];
  useEffect(() => {
    if (typeMapping[type]) {
      setSelectedType(typeMapping[type]);
    }
  }, [type]);

  useEffect(() => {
    // Сбрасываем категорию при изменении типа
    setSelectedCategory('');
  }, [selectedType]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleManufacturerChange = (manufacturer: string) => {
    setSelectedManufacturer(manufacturer);
  };

  const filteredProducts = initialProducts.filter((product) => {
    return (
      (selectedType ? product.type === selectedType : true) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedManufacturer ? product.manufacturer === selectedManufacturer : true)
    );
  });

  const allCategories = Array.from(new Set(initialProducts.map((product) => product.category)));
  const allTypes = Array.from(new Set(initialProducts.map((product) => product.type)));

  const categories = selectedType
    ? allCategories.filter((category) => initialProducts.some((product) => product.type === selectedType && product.category === category))
    : [];

  const manufacturers = Array.from(new Set(initialProducts.map((product) => product.manufacturer)));

  return (
    <div className="flex flex-col gap-8 justify-center items-center pb-12">
      <Navbar position="fixed" />
      <div className="flex flex-col gap-8 lg:w-[90%] justify-center mt-32">
        <Navigation />
        <div>
          <nav className="flex gap-12">
            {allTypes.map((type) => (
              <Link
                className={`text-3xl font-bold hover:text-main ${
                  selectedType === type ? 'text-main' : 'text-black'
                }`}
                key={type}
                to={`/production/${typeMapping[type]}`}
              >
                {type}
              </Link>
            ))}
          </nav>
        </div>
        <div className='relative flex gap-8'>
          <div className='inherit'>
            <div className='sticky top-[8rem]'>
              <ProductFilter
                categories={categories}
                manufacturers={manufacturers}
                selectedCategory={selectedCategory}
                selectedManufacturer={selectedManufacturer}
                onCategoryChange={handleCategoryChange}
                onManufacturerChange={handleManufacturerChange}
              />
            </div>

          </div>
          <div className='w-4/5 ml-auto'>
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;
