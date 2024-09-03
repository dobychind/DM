import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const typeMapping: { [key: string]: string } = {
  'confectionery': 'Кондитерские изделия',
  'bread': 'Свежий хлеб',
  'production': 'Производство',
  'distribution': 'Дистрибьюция',
  'logistic': 'Логистика',
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part);

  const generateBreadcrumbs = () => {
    const breadcrumbs = pathParts.map((part, index) => {
      const path = `/${pathParts.slice(0, index + 1).join('/')}`;
      
      // Используем typeMapping для отображения человеко-читаемых названий
      const label = typeMapping[part] || (part.charAt(0).toUpperCase() + part.slice(1));

      return (
        <span key={path} className='flex items-center gap-2'>
          <Link className='text-main font-semibold text-sm' to={path}>{label}</Link>
          {index < pathParts.length - 1 && ' > '}
        </span>
      );
    });

    return breadcrumbs;
  };

  return (
    <div className="flex items-center gap-2">
      <Link className='text-main font-semibold text-m' to="/">Главная</Link>
      {pathParts.length > 0 && ' > '}
      {generateBreadcrumbs()}
    </div>
  );
};

export default Breadcrumbs;
