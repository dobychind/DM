import React, { useEffect, useRef } from 'react';
import Select from 'react-select';

interface ProductFilterProps {
  categories: string[];
  manufacturers: string[];
  selectedCategory: string;
  selectedManufacturer: string;
  onCategoryChange: (category: string) => void;
  onManufacturerChange: (manufacturer: string) => void;
  isOpen: boolean;
  toggleFilter: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  manufacturers,
  selectedCategory,
  selectedManufacturer,
  onCategoryChange,
  onManufacturerChange,
  isOpen,
  toggleFilter,
}) => {
  const filterRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
      toggleFilter();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const manufacturerOptions = manufacturers.map((manufacturer) => ({
    value: manufacturer,
    label: manufacturer,
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#FF6A00',
      borderColor: '#FF6A00',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '0.5rem',
      fontSize: '1rem',
      fontWeight: '500',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#FF6A00' : 'transparent',
      color: state.isFocused ? 'white' : 'black',
      padding: '8px 12px',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: '#F7832C',
      borderRadius: '0.5rem',
      color: 'white',
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: 'white',
    }),
  };

  return (
    <div>
      <button
        className="flex top-4 left-4 z-50 bg-[#FF6A00] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#e55e00] focus:outline-none focus:ring-2 focus:ring-white md:hidden"
        onClick={toggleFilter}
      >
        Открыть фильтры
      </button>

      <div
        ref={filterRef}
        className={`fixed inset-0 z-[1000] bg-[#F7832C] w-1/2 md:w-auto md:relative md:rounded-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:flex md:flex-row md:justify-between gap-4 2xl:gap-6 md:border px-4 py-4 2xl:py-8`}
      >
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold text-white">Фильтр</h2>
          {/* <button
            className="text-white w-full text-3xl bg-black p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={toggleFilter}
          >
            &times;
          </button> */}
        </div>

        {/* Производитель Фильтр */}
        <div className="relative mt-4 md:mt-0">
          <Select
            value={manufacturerOptions.find(option => option.value === selectedManufacturer)}
            onChange={(selectedOption) => onManufacturerChange(selectedOption?.value || '')}
            options={manufacturerOptions}
            styles={customStyles}
            isClearable
            placeholder="Все производители"
          />
        </div>

        {/* Категории Фильтр */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 mt-4 md:mt-0">
          <button
            className={`px-4 py-2 w-full rounded-lg text-sm font-medium  ${selectedCategory === '' ? 'bg-main text-white border border-white' : 'bg-main text-white'
              }`}
            onClick={() => onCategoryChange('')}
          >
            Все категории
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium w-full ${selectedCategory === category ? 'bg-white text-black' : 'bg-main text-white'
                }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
