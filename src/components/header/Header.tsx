import React, { useState } from 'react';
import Logo from '/DmLogo.svg';
import ArrowDown from '/ArrowDown.svg';
import Burger from '/burgen-menu.png';
import Close from '/close.png';
import { Link } from 'react-router-dom';
import './index.css';
// import Button from '../button/Button';

interface HeaderProps {
  scrollToAbout: () => void;
  forwardRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout, forwardRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveredMisc, setIsHoveredMisc] = useState(false);


  // const handleClick = () => {
  //   console.log('click');
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-[url('/back-main.jpg')] bg-cover">
      <div ref={forwardRef} className="flex flex-col items-center">
        {/* <div className='absolute z-10 right-1/2 top-1/2 md:right-auto md:top-auto md:left-[43%] md:bottom-[20%]'>
          <Link  to="/production/bread">
            <Button onClick={handleClick} color='orange' text='Каталог продукции' />
          </Link>
        </div> */}
        <div className='max-w-[95vw] hidden md:flex mx-auto gap-5 p-3 text-xl md:text-2xl'>
          <Link to="/"><p className='text-white font-semibold hover:underline hover:text-blue'>Главная</p></Link>
          <Link to="/production" className='hover:underline text-white font-semibold hover:text-blue'>Производство</Link>
          <Link to="/production/bread" className='hover:underline text-white font-semibold hover:text-blue'>Продукция</Link>
          <Link to="/distribution"><p className='text-white font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></Link>
          <Link to="/logistic"><p className='text-white font-semibold hover:underline hover:text-blue'>Логистика</p></Link>
          <Link to="/job" className=' hover:underline text-white font-semibold hover:text-blue'>Вакансии</Link>
          <Link to="/contacts" className=' hover:underline text-white font-semibold hover:text-blue'>Контакты</Link>
        </div>
        <div className="md:hidden relative w-full">
          {isMenuOpen && (
            <div data-aos="fade-right" data-aos-duration="500" className={`flex z-30 flex-col gap-4 text-2xl bg-gray-800 py-6 pl-6 absolute top-0 left-0 w-full`}>
              <a className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Главная</a>
              <Link to="/production" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Производство</Link>
              <Link to="/production/bread" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Продукция</Link>
              <Link to="/distribution" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Дистрибьюция</Link>
              <Link to="/logistic" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Логистика</Link>
              <div
                onMouseEnter={() => setIsHoveredMisc(true)}
                onMouseLeave={() => setIsHoveredMisc(false)}
                className='relative'
              >
                <div className="flex items-center cursor-pointer">
                  <span className='text-white font-semibold'>Прочее</span>
                  <img
                    className={`ml-2 transform transition-transform ${isHoveredMisc ? 'rotate-180' : 'rotate-0'}`}
                    src='chevron-down.svg'
                    alt="arrow"
                  />
                </div>
                <div className={`dropdown-content ${isHoveredMisc ? 'show' : ''} flex absolute top-10 bg-slate-500 p-4 rounded-2xl flex-col gap-3`}>
                  <Link to="/job" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Вакансии</Link>
                  <Link to="/contacts" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Контакты</Link>
                </div>
              </div>
              <button onClick={toggleMenu} className="text-white absolute w-[32px] h-[32px] top-6 right-6">
                <img src={Close} alt="close button" />
              </button>
            </div>
          )}
          <button onClick={toggleMenu} className={`text-white flex flex-col items-center w-[32px] h-[32px] ml-4 mt-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
            <img src={Burger} alt='menu button' />
            <p>Меню</p>
          </button>
        </div>
      </div>
      <div className="flex rounded-b-lg rounded-bl-lg flex-col bg-cover h-screen justify-center">
        <div className="flex flex-col gap-8 mb-32">
          <img src={Logo} alt='logo Daniel' className='h-[150px] md:h-[200px]' />
          <h2 className='text-white text-3xl text-center font-title letter-wider font-semibold md:text-5xl'>Группа компаний<br /><span className='text-5xl font-bold md:text-7xl'>Даниэль М</span></h2>
        </div>
        <button onClick={scrollToAbout} className='absolute w-fit left-0 right-0 bottom-3 mx-auto'><img src={ArrowDown} alt="arrow down" /></button>
      </div>
    </section>
  );
}

export default Header;
