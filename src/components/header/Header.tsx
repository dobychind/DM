import React from 'react';
import Logo from '/DmLogo.svg';
import ArrowDown from '/ArrowDown.svg';

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToDistribution: () => void;
  scrollToPoduction: () => void;
  scrollToLogistic: () => void;
  forwardRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ scrollToAbout, scrollToDistribution, scrollToPoduction, scrollToLogistic, forwardRef }) => {

  return (
    <section className="bg-[url('/back-main.jpg')] bg-cover">
      <div  ref={forwardRef} className="flex  flex-col items-center">
        <div className='flex mx-auto w-full justify-between items-center py-3 font-main shadow-transparent bg-gradient-to-b from-zinc-700 via-70% to-transparent bg-opacity-70'>
          <div className='flex max-w-[95vw] mx-auto gap-5 text-xl md:text-2xl'>
            <a onClick={scrollToAbout} href="#"><p className='text-white text-xl font-semibold hover:underline hover:text-blue '>Главная</p></a>
            <a onClick={scrollToAbout} href="#"><p className='text-white text-l w-max font-semibold hover:underline hover:text-blue'>О компании</p></a>
            <a onClick={scrollToPoduction} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Производство</p></a>
            <a onClick={scrollToDistribution} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Дистрибьюция</p></a>
            <a onClick={scrollToLogistic} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Логистика</p></a>
            <a onClick={scrollToAbout} href="#"><p className='text-white font-semibold hover:underline hover:text-blue'>Прочее</p></a>
          </div>
        </div>
      </div>
      <div className="flex  rounded-b-lg rounded-bl-lg flex-col max-h-screen bg-cover h-screen justify-center">
        <div className="flex flex-col gap-8 mb-24">
          <img src={Logo} alt='logo Daniel' className='h-[150px] md:h-[200px]' />
          <h2 className=' text-white text-3xl text-center font-title letter-wider font-semibold md:text-5xl'>Группа компаний<br /><span className='text-5xl font-bold md:text-7xl'>Даниэль М</span></h2>
        </div>
        <button onClick={scrollToAbout} className='absolute w-fit left-0 right-0 bottom-3 mx-auto'><img src={ArrowDown} alt="" /></button>
      </div>
    </section>
  );
}

export default Header;
