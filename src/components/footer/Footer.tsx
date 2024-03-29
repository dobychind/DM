import DmLogo from '/DmLogo.svg';
import Button from '../button/Button';

const Footer = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (

    <div className=" bg-[url('/back.jpg')] bg-bottom bg-cover">
      <div className="flex py-4 mx-auto max-w-[95%] w-full justify-between">

        <div className='flex items-center gap-10'>
          <img src={DmLogo} alt="" className='h-[70px]' />
          <div className='font-semibold w-1/3'>
            <p className='text-white'>Москва, 2-й Кожевнический переулок, д.12</p>
            <p className='text-white'>+7 (499) 653 53-94</p>
            <p className='text-white underline'>info@thdm.ru</p>
          </div>
          <div className='font-semibold w-1/3'>
            <p className='text-white'>Санкт-Петербург, 7-й Предпортовый проезд, д.10</p>
            <p className='text-white'>+7 (812) 622 12-46</p>
            <p className='text-white underline'>info@thdm.ru</p>
          </div>
        </div>
        <div className='flex justify-end mt-auto h-fit'>
          <a href="#"><Button onClick={handleClick} text='Наверх' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
