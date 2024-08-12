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
        <div className="flex flex-col gap-6 border px-12 py-8 rounded-2xl bg-[#FF6A0099]">
            <div className="relative">
                <select
                    value={selectedManufacturer}
                    onChange={(e) => onManufacturerChange(e.target.value)}
                    className="appearance-none text-lg font-medium px-4 py-2 pr-8 rounded-lg bg-orange text-white focus:outline-none focus:ring-2 focus:ring-main active:border-main"
                >
                    <option value="">Все производители</option>
                    {manufacturers.map((manufacturer) => (
                        <option key={manufacturer} value={manufacturer}>
                            {manufacturer}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 20 20">
                        <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                </div>
            </div>


            <div className="flex flex-col gap-2">
                <button
                    className={`px-4 py-2 rounded-lg text-lg font-medium ${selectedCategory === '' ? 'bg-orange text-white' : 'text-black'
                        }`}
                    onClick={() => onCategoryChange('')}
                >
                    Все категории
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg text-lg font-medium text-black ${selectedCategory === category ? 'bg-orange text-white' : 'text-black'
                            }`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>


        </div>
    );
};

export default ProductFilter;
