import { useState } from 'react'
import Burger from '/burgen-menu.png';
import Close from '/close.png';
import Logo from '/DmLogo.svg';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isActive = (path: string): string => location.pathname === path ? ' underline ' : 'text-white ';


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section className="bg-transparent fixed w-full z-50 top-0 pb-4 md:pb-0">
            <div className="flex flex-col items-center">
                <div className='hidden md:flex mx-auto w-full justify-between items-center py-3 font-main bg-gray-900 shadow-transparent bg-opacity-50'>
                    <img src={Logo} alt='logo Daniel' className='h-[70px] ml-8' />
                    <div className='flex max-w-[95vw]  mx-auto gap-5 text-xl md:items-center md:text-2xl'>
                       <Link to="/"><p className={`${isActive('/')} text-white font-semibold hover:underline hover:text-blue `}>Главная</p></Link>
                       <Link to="/"><p className={`${isActive('/')} text-white text-l w-max font-semibold hover:underline hover:text-blue`}>О компании</p></Link>
                       <Link to="/production"><p className={`${isActive('/production')} text-white font-semibold hover:underline hover:text-blue`}>Производство</p></Link>
                       <Link to="/distribution"><p className={`${isActive('/distribution')}text-white font-semibold hover:underline hover:text-blue`}>Дистрибьюция</p></Link>
                       <Link to="/logistic"><p className={`${isActive('/logistic')}text-white font-semibold hover:underline hover:text-blue`}>Логистика</p></Link>
                       <Link to="/"><p className='text-white font-semibold hover:underline hover:text-blue'>Прочее</p></Link>
                    </div>
                </div>
                <div className="md:hidden  flex justify-between relative w-full">
                    {isMenuOpen && (
                        <div data-aos="fade-right" data-aos-duration="500" className={`flex flex-col z-10 gap-4 text-2xl bg-gray-800  py-6 pl-6 absolute top-0 left-0 w-full`}>
                            <Link to="/" className='block text-white w-fit font-semibold hover:underline hover:text-blue '>Главная</Link>
                            <Link to="/" className='block text-white w-max font-semibold hover:underline hover:text-blue'>О компании</Link>
                            <Link to="/production" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Производство</Link>
                            <Link to="/distribution" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Дистрибьюция</Link>
                            <Link to="/logistic" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Логистика</Link>
                            <Link to="" className='block text-white w-fit font-semibold hover:underline hover:text-blue'>Прочее</Link>
                            <button onClick={toggleMenu} className="text-white absolute w-[32px] h-[32px] top-6 right-6">
                                <img src={Close} alt='close button' />
                            </button>
                        </div>
                    )}
                    <button onClick={toggleMenu} className={`text-white flex flex-col items-center w-[32px] h-[32px] ml-4 mt-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
                        <img src={Burger} alt='' />
                        <p>Меню</p>
                    </button>
                    <img src={Logo} alt='logo Daniel' className='h-[56px] mr-4' />

                </div>
            </div>
        </section>
    );
}

export default Navbar