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
        <div className="flex gap-6">
            <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="">Все категории</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
            <select value={selectedManufacturer} onChange={(e) => onManufacturerChange(e.target.value)}>
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
