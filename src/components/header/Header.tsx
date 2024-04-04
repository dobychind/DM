import React from 'react';
import Logo from '/DmLogo.svg';
import ArrowDown from '/ArrowDown.svg';

interface HeaderProps {
  scrollToAbout: () => void;
  forwardRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout, forwardRef }) => {

  return (
    <section className="bg-[url('/back-main.jpg')] bg-cover">
      <div  ref={forwardRef} className="flex  flex-col items-center">
        <div className='flex mx-auto w-full justify-between items-center py-3 font-main shadow-transparent bg-zinc-700 bg-opacity-70'>
          <div className='flex max-w-[95vw] mx-auto gap-5'>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue '>Главная</p></a>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>О компании</p></a>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Производство</p></a>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></a>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Логистика</p></a>
            <a href="#"><p className='text-white text-2xl font-semibold hover:underline hover:text-blue'>Прочее</p></a>
          </div>
        </div>
      </div>
      <div className="flex  rounded-b-lg rounded-bl-lg flex-col max-h-screen bg-cover h-screen justify-center">
        <div className="flex flex-col gap-8 mb-24">
          <img src={Logo} alt='' className='h-[200px]' />
          <h2 className=' text-white text-5xl text-center font-title letter-wider font-semibold'>Группа компаний<br /><span className='text-7xl'>Даниэль М</span></h2>
        </div>
        <button onClick={scrollToAbout} className='absolute w-fit left-0 right-0 bottom-3 mx-auto'><img src={ArrowDown} alt="" /></button>
      </div>
    </section>
  );
}

export default Header;
