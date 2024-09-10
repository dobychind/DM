import { useEffect, useState } from 'react';
import Burger from '/burgen-menu.png';
import Close from '/close.png';
import Logo from '/DmLogo.svg';
import Chevron from '/chevron-black.svg'
import { Link, useLocation } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

interface NavbarProps {
    position: 'fixed' | 'block';
}

const Navbar: React.FC<NavbarProps> = ({ position }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        Aos.init()
    }, [])

    const isActive = (path: string): string => {
        if (path === '/' && location.pathname === '/') {
            return ' text-main ';
        } else if (path !== '/' && location.pathname.startsWith(path)) {
            return ' text-main ';
        } else {
            return 'text-black ';
        }
    };

    const [isHoveredProduction, setIsHoveredProduction] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className={`${position === 'fixed' ? 'fixed' : 'block'} bg-transparent w-full z-50 top-0 pb-4 md:pb-0`}>
            <div className="flex flex-col items-center">
                <div className="hidden md:flex mx-auto w-full justify-between items-center py-3 font-main bg-white shadow-transparent ">

                    <a href="/">
                        <img src={Logo} alt="logo Daniel" className="h-[70px] ml-8" />
                    </a>
                    <div className="flex max-w-[95vw] mx-auto gap-5 text-xl md:items-center md:text-2xl">
                        <Link reloadDocument to="/">
                            <p className={`${isActive('/')} text-black font-semibold hover:underline hover:text-main `}>Главная</p>
                        </Link>
                        <Link reloadDocument to="/">
                            <p className={`${isActive('/')} text-black text-l w-max font-semibold hover:underline hover:text-main`}>О компании</p>
                        </Link>
                        <div
                            onMouseEnter={() => setIsHoveredProduction(true)}
                            onMouseLeave={() => setIsHoveredProduction(false)}
                            className='relative'
                        >
                            <div className="flex items-center cursor-pointer">
                                <span className='text-black font-semibold'>Производство</span>
                                <img
                                    className={`ml-2 transform transition-transform ${isHoveredProduction ? 'rotate-180' : 'rotate-0'}`}
                                    src={Chevron}
                                    alt="arrow"
                                />
                            </div>
                            <div className={`dropdown-content ${isHoveredProduction ? 'show' : ''} flex absolute top-10 bg-slate-500 p-4 rounded-2xl flex-col gap-3`}>
                                <Link reloadDocument to="/production" className='text-lg hover:underline text-white font-semibold hover:text-blue'>О производстве</Link>
                                <Link reloadDocument to="/production/bread" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Продукция</Link>
                            </div>
                        </div>
                        <Link reloadDocument to="/distribution">
                            <p className={`${isActive('/distribution')} text-black font-semibold hover:underline hover:text-main`}>Дистрибьюция</p>
                        </Link>
                        <Link reloadDocument to="/logistic">
                            <p className={`${isActive('/logistic')} text-black font-semibold hover:underline hover:text-main`}>Логистика</p>
                        </Link>
                        <Link reloadDocument to="/job">
                            <p className={`${isActive('/job')} text-black font-semibold hover:underline hover:text-main`}>Вакансии</p>
                        </Link><Link reloadDocument to="/contacts">
                            <p className={`${isActive('/contacts')} text-black font-semibold hover:underline hover:text-main`}>Контакты</p>
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex justify-between relative w-full">
                    {isMenuOpen && (
                        <div
                            data-aos="fade-right"
                            data-aos-duration="500"
                            className="flex flex-col z-10 gap-4 text-2xl bg-gray-800 py-6 pl-6 absolute top-0 left-0 w-full"
                        >
                            <Link reloadDocument to="/" className="block text-white w-fit font-semibold hover:underline hover:text-main ">
                                Главная
                            </Link>
                            <Link reloadDocument to="/" className="block text-white w-max font-semibold hover:underline hover:text-main">
                                О компании
                            </Link>
                            <div
                                onMouseEnter={() => setIsHoveredProduction(true)}
                                onMouseLeave={() => setIsHoveredProduction(false)}
                                className='relative'
                            >
                                <div className="flex items-center cursor-pointer">
                                    <span className='text-white font-semibold'>Производство</span>
                                    <img
                                        className={`ml-2 transform transition-transform ${isHoveredProduction ? 'rotate-180' : 'rotate-0'}`}
                                        src='chevron-down.svg'
                                        alt="arrow"
                                    />
                                </div>
                                <div className={`dropdown-content ${isHoveredProduction ? 'show' : ''} flex absolute top-10 bg-slate-500 p-4 rounded-2xl flex-col gap-3`}>
                                    <a href="#brands" className='text-lg text-white font-semibold hover:underline hover:text-blue'>Наши бренды</a>
                                    <Link reloadDocument to="/production" className='text-lg hover:underline text-white font-semibold hover:text-blue'>О производстве</Link>
                                    <Link reloadDocument to="/production/bread" className='text-lg hover:underline text-white font-semibold hover:text-blue'>Продукция</Link>
                                </div>
                            </div>
                            <Link reloadDocument to="/distribution" className="block text-white w-fit font-semibold hover:underline hover:text-main">
                                Дистрибьюция
                            </Link>
                            <Link reloadDocument to="/logistic" className="block text-white w-fit font-semibold hover:underline hover:text-main">
                                Логистика
                            </Link>
                            <Link reloadDocument to="/job" className="block text-white w-fit font-semibold hover:underline hover:text-main">
                                Вакансии
                            </Link>
                            <Link reloadDocument to="/contacts" className="block text-white w-fit font-semibold hover:underline hover:text-main">
                                Контакты
                            </Link>
                            <button onClick={toggleMenu} className="text-white absolute w-[32px] h-[32px] top-6 right-6">
                                <img src={Close} alt="close button" />
                            </button>
                        </div>
                    )}
                    <button
                        onClick={toggleMenu}
                        className={`text-white flex flex-col items-center w-[32px] h-[32px] ml-4 mt-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                    >
                        <img src={Burger} alt="Burger icon" />
                        <p className='text-black'>Меню</p>
                    </button>
                    <a href="/">
                        <img src={Logo} alt="logo Daniel" className="h-[56px] mr-4" />

                    </a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
