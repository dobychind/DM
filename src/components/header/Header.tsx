import React, { useState } from 'react';
import Logo from '/DmLogo.svg';
import ArrowDown from '/ArrowDown.svg';
import Burger from '/burgen-menu.png';
import Close from '/close.png';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToDistribution: () => void;
  scrollToPoduction: () => void;
  scrollToLogistic: () => void;
  forwardRef: React.RefObject<HTMLDivElement>;
}



const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToDistribution, scrollToPoduction, scrollToLogistic, forwardRef }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="bg-[url('/back-main.jpg')] bg-cover">
      <div ref={forwardRef} className="flex  flex-col items-center">
        <div className='hidden md:flex mx-auto w-full justify-between items-center py-3 font-main shadow-transparent bg-gradient-to-b from-zinc-700 via-70% to-transparent bg-opacity-70'>
          <div className='flex max-w-[95vw] mx-auto gap-5 text-xl md:text-2xl'>
            <a onClick={scrollToAbout} href="#"><p className='text-white font-semibold hover:underline hover:text-blue '>Главная</p></a>
            <a onClick={scrollToAbout} href="#"><p className='text-white text-l w-max font-semibold hover:underline hover:text-blue'>О компании</p></a>
            <a onClick={scrollToPoduction} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Производство</p></a>
            <a onClick={scrollToDistribution} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></a>
            <a onClick={scrollToLogistic} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Логистика</p></a>
            <a onClick={scrollToAbout} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Прочее</p></a>
          </div>
        </div>
        <div className="md:hidden relative w-full">
        {isMenuOpen && (
          <div data-aos="fade-right" data-aos-duration="500" className={`flex flex-col gap-4 text-2xl bg-gray-800  py-6 pl-6 absolute top-0 left-0 w-full`}>
            <a onClick={scrollToAbout} href="#" className='block text-white w-fit font-semibold hover:underline hover:text-blue '>Главная</a>
            <a onClick={scrollToAbout} href="#" className='block text-white w-max font-semibold hover:underline hover:text-blue'>О компании</a>
            <a onClick={scrollToPoduction} href="#" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Производство</a>
            <a onClick={scrollToDistribution} href="#" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Дистрибьюция</a>
            <a onClick={scrollToLogistic} href="#" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Логистика</a>
            <a onClick={scrollToAbout} href="#" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Прочее</a>
            <button onClick={toggleMenu} className="text-white absolute w-[32px] h-[32px] top-6 right-6">
              <img src={Close} alt='close button'/>
            </button>
          </div>
        )}
        <button onClick={toggleMenu} className={`text-white flex flex-col items-center w-[32px] h-[32px] ml-4 mt-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <img src={Burger} alt=''/>
          <p>Меню</p>
        </button>
      </div>
      </div>
      <div className="flex  rounded-b-lg rounded-bl-lg flex-col  bg-cover h-screen justify-center">
        <div className="flex flex-col gap-8 mb-32">
          <img src={Logo} alt='logo Daniel' className='h-[150px] md:h-[200px]' />
          <h2 className=' text-white text-3xl text-center font-title letter-wider font-semibold md:text-5xl'>Группа компаний<br /><span className='text-5xl font-bold md:text-7xl'>Даниэль М</span></h2>
        </div>
        <button onClick={scrollToAbout} className='absolute w-fit left-0 right-0 bottom-3 mx-auto'><img src={ArrowDown} alt="" /></button>
      </div>
    </section>
  );
}

export default Header;
