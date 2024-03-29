import React from 'react';
import Logo from '/DmLogo.svg';
import ArrowDown from '/ArrowDown.svg';

interface HeaderProps {
  scrollToAbout: () => void; // Принимаем функцию для скролла к компоненту About
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout }) => {

  return (
    <div className="flex bg-[url('/back.jpg')] bg-cover flex-col max-h-screen h-screen items-center">
      <div className='flex mx-auto max-w-[95vw] justify-between items-center py-3 font-main'>
        <div className='flex gap-5'>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Главная</p></a>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>О компании</p></a>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Производство</p></a>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></a>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Логистика</p></a>
          <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Прочее</p></a>
        </div>
      </div>
      <div className='flex flex-col m-auto justify-center'>
        <img src={Logo} alt='' className='h-[250px]' />
        <h2 className=' text-white text-4xl text-center font-bold'>Группа компаний<br /><span className=' text-6xl'>"Даниэль М"</span></h2>
      </div>
      <button onClick={scrollToAbout} className='mb-5'><img src={ArrowDown} alt="" /></button>
    </div>
  );
}

export default Header;
