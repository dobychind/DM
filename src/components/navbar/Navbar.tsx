import { useEffect, useState } from 'react';
import Burger from '/burgen-menu.png';
import Close from '/close.png';
import { Link, useLocation } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'
import DM from '/DmLogo.svg';
import HPP from '/HppLogo.png';


interface NavbarProps {
    position: 'fixed' | 'block';
    logoname: 'DM' | 'Hpp';
}

const Navbar: React.FC<NavbarProps> = ({ position, logoname }) => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        Aos.init()
    }, [])
    const getLogo = (logoname: string) => {
        return logoname === 'Hpp' ? HPP : DM;
    };

    const isActive = (path: string): string => {
        if (path === '/' && location.pathname === '/') {
            return ' text-main ';
        } else if (path !== '/' && location.pathname.startsWith(path)) {
            return ' text-black ';
        } else {
            return 'text-black ';
        }
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className={`${position === 'fixed' ? 'fixed' : 'block'} bg-white w-full z-50 top-0 pb-4 md:pb-0`}>
            <div className="flex flex-col">
                <div className='w-full hidden justify-between  md:flex gap-5 2xl:gap-7 p-6 pt-2 pl-14 2xl:pl-28 font-normal text-xl 2xl:text-2xl'>
                    <div className='flex items-center gap-7'>
                        <Link to="/"><p className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Главная</p></Link>
                        <Link to="/production" className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Производство</Link>
                        <Link to="/production/bread" className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Продукция</Link>
                        <Link to="/distribution"><p className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Дистрибьюция</p></Link>
                        <Link to="/logistic"><p className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Логистика</p></Link>
                        <Link to="/job"><p className={`${isActive('/jobs')} text-black hover:underline hover:text-main`}>Работа</p></Link>
                        <Link to="/contacts"><p className={`${isActive('/contacts')} text-black hover:underline hover:text-main`}>Контакты</p></Link>
                        
                    </div>
                    <a className='h-[70px]' href="/">
                            <img src={getLogo(logoname)} alt="logo Daniel" className="h-full w-full object-contain xl:ml-8" />
                        </a>

                </div>

                <div className="md:hidden relative w-full">
                    {isMenuOpen && (
                        <div data-aos="fade-right" data-aos-duration="500" className={`flex z-30 flex-col gap-4 text-2xl bg-gray-800 py-6 pl-6 absolute top-0 left-0 w-full`}>
                            <a className='block text-white w-fit font-semibold hover:underline hover:text-main'>Главная</a>
                            <Link to="/production" className='text-lg hover:underline text-white font-semibold hover:text-main'>Производство</Link>
                            <Link to="/production/bread" className='text-lg hover:underline text-white font-semibold hover:text-main'>Продукция</Link>
                            <Link to="/distribution" className='block text-white w-fit font-semibold hover:underline hover:text-main'>Дистрибьюция</Link>
                            <Link to="/logistic" className='block text-white w-fit font-semibold hover:underline hover:text-main'>Логистика</Link>
                            <Link to="/job" className='text-lg hover:underline text-white font-semibold hover:text-main'>Вакансии</Link>
                            <Link to="/contacts" className='text-lg hover:underline text-white font-semibold hover:text-main'>Контакты</Link>
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
        </section>
    );
};

export default Navbar;
