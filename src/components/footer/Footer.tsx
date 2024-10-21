import DmLogo from '/DmLogo.svg';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

interface FooterProps {
  scrollToHeader: () => void; // Принимаем функцию для скролла к компоненту About
}

const Footer: React.FC<FooterProps> = ({ scrollToHeader }) => {
  return (

    <div className="bg-[url('/foooter.png')] w-full bg-bottom bg-cover bg-no-repeat">
      <div className="flex flex-col py-8 gap-8 mx-auto max-w-[95%] w-full justify-between md:flex-row">

        <div className='flex flex-col md:items-center md:gap-4 gap-12 md:flex-row'>
          <Link to="/"><img src={DmLogo} alt="Logo" className='h-[70px]' /></Link>
          <div className='flex flex-col gap-1 font-semibold md:w-1/3'>
            <p className='text-white'>Москва, 2-й Кожевнический переулок, д.12</p>
            <a href='tel:+7 (499) 653 53-94' className='text-white'>+7 (499) 653 53-94</a>
            <a href="mailto:info@thdm.ru" className='text-white underline'>info@thdm.ru</a>
          </div>
          <div className='flex flex-col gap-1 font-semibold md:w-1/3'>
            <p className='text-white'>Санкт-Петербург, 7-й Предпортовый проезд, д.10</p>
            <a href='tel:+7 (812) 622 12-46' className='text-white'>+7 (812) 622 12-46</a>
            <a href="mailto:info@thdm.ru" className='text-white underline'>info@thdm.ru</a>
          </div>
        </div>
        <div className='flex  md:justify-end mt-auto h-fit'>
          <Button onClick={scrollToHeader} text='Наверх'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
