import DmLogo from '/DmLogo.svg';
import Button from '../button/Button';

interface FooterProps {
  scrollToHeader: () => void; // Принимаем функцию для скролла к компоненту About
}

const Footer: React.FC<FooterProps> = ({ scrollToHeader }) => {
  return (

    <div className="bg-[url('/back.jpg')] bg-bottom bg-cover">
      <div className="flex flex-col py-8 gap-4 mx-auto max-w-[95%] w-full justify-between md:flex-row">

        <div className='flex flex-col items-center gap-10 md:flex-row'>
          <img src={DmLogo} alt="" className='h-[70px]' />
          <div className='font-semibold md:w-1/3'>
            <p className='text-white'>Москва, 2-й Кожевнический переулок, д.12</p>
            <p className='text-white'>+7 (499) 653 53-94</p>
            <p className='text-white underline'>info@thdm.ru</p>
          </div>
          <div className='font-semibold md:w-1/3'>
            <p className='text-white'>Санкт-Петербург, 7-й Предпортовый проезд, д.10</p>
            <p className='text-white'>+7 (812) 622 12-46</p>
            <p className='text-white underline'>info@thdm.ru</p>
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
