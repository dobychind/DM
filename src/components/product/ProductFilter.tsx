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
  const filterRef = useRef<HTMLDivElement>(null); // Create a ref for the filter container

  // Function to handle clicks outside the filter
  const handleClickOutside = (event: MouseEvent) => {
    if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
      toggleFilter(); // Close the filter if the click was outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Add or remove the event listener based on isOpen state

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
    }),
  };

  return (
    <div
      ref={filterRef} // Attach the ref to the container
      className={`fixed inset-0 z-50 bg-[#F7832C] w-4/5 md:w-auto md:relative md:rounded-l-2xl transform transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex md:flex-col gap-4 2xl:gap-6 md:border px-12 py-4 2xl:py-8`}
    >
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-xl font-bold text-white">Фильтр</h2>
        <button
          className="text-white text-3xl"
          onClick={toggleFilter}
        >
          &times;
        </button>
      </div>

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

      <div className="flex flex-col gap-2 mt-4">
        <button
          className={`px-4 py-2 rounded-lg text-lg font-medium ${
            selectedCategory === '' ? 'bg-orange text-white' : 'text-black'
          }`}
          onClick={() => onCategoryChange('')}
        >
          Все категории
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-lg font-medium text-black ${
              selectedCategory === category ? 'bg-orange text-white' : 'text-black'
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
