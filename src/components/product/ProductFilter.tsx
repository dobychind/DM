import React from 'react';

interface ProductFilterProps {
    categories: string[];
    manufacturers: string[];
    selectedCategory: string;
    selectedManufacturer: string;
    onCategoryChange: (category: string) => void;
    onManufacturerChange: (manufacturer: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
    categories,
    manufacturers,
    selectedCategory,
    selectedManufacturer,
    onCategoryChange,
    onManufacturerChange,
}) => {
    return (
        <div className="flex flex-col gap-6 border px-12 py-8 rounded-2xl">
            <div className="flex flex-col gap-2">
                <button
                    className={`px-4 py-2 rounded ${
                        selectedCategory === '' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
                    }`}
                    onClick={() => onCategoryChange('')}
                >
                    Все категории
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded ${
                            selectedCategory === category ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'
                        }`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <select
                value={selectedManufacturer}
                onChange={(e) => onManufacturerChange(e.target.value)}
                className="px-4 py-2 rounded bg-gray-200"
            >
                <option value="">Все производители</option>
                {manufacturers.map((manufacturer) => (
                    <option key={manufacturer} value={manufacturer}>
                        {manufacturer}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProductFilter;
