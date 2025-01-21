import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import banner from '/contactsBanner.jpg';

const Contacts = () => {
  return (
    <div className="flex flex-col w-full h-screen gap-6 bg-white">
      <Navbar logoname="DM" position="fixed" color="text-white" />
      <div className="w-full h-1/3 relative">
        <img src={banner} className="h-full w-full object-cover rounded-b-[56px] rounded-br-[56px]" alt="Баннер страницы контактов" />
        <h2 className="font-title absolute bottom-24 left-16 md:left-28 text-white text-5xl xl:text-7xl">Наши контакты</h2>
      </div>

      <div className='grid grid-rows-2 gap-10 w-full my-auto items-center justify-center mx-auto px-4 pb-8'>
        {/* Города */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Москва</p>
            <a href='tel:+7 (499) 653 53-94' className='font-normal text-black hover:text-main text-2xl'>+7 (499) 653 53-94</a>
            <a href="mailto:info@thdm.ru" className='text-black font-normal hover:text-main text-2xl'>info@thdm.ru</a>
            <p className='text-black font-normal text-2xl'>2-й Кожевнический переулок, д.12</p>
          </div>
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Санкт-Петербург</p>
            <a href='tel:+7 (812) 622 12-46' className='font-normal text-black hover:text-main text-2xl'>+7 (812) 622 12-46</a>
            <a href="mailto:info@thdm.ru" className='text-black font-normal hover:text-main text-2xl'>info@thdm.ru</a>
            <p className='text-black font-normal text-2xl'>7-й Предпортовый проезд, д.10</p>
          </div>
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Великий Новгород</p>
            <a href='tel:+7 (816) 260 12-79' className='font-normal text-black hover:text-main text-2xl'>+7 (816) 260 12-79</a>
            <a href="mailto:info@thdm.ru" className='text-black font-normal hover:text-main text-2xl'>vn.office@hpp1.ru</a>
            <p className='text-black font-normal text-2xl'>Пр-кт Александра Корсунова, д. 10</p>
          </div>
        </div>

        {/* Отделы */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <div></div>
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Отдел кадров СПБ</p>
            <a href='tel:622 12 46' className='font-normal text-black hover:text-main text-2xl'>+7 (812) 622 12 46 (добавочный 117)</a>
          </div>
          {/* <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Отдел продаж</p>
            <a href='tel:+7 (812) 622 12-46' className='font-normal text-black hover:text-main text-2xl'>+7 (812) 622 12-46</a>
          </div>
          <div className='flex flex-col gap-1 font-semibold'>
            <p className='text-main font-medium text-3xl'>Отдел бухгалтерии</p>
            <a href='tel:+7 (812) 622 12-46' className='font-normal text-black hover:text-main text-2xl'>+7 (812) 622 12-46</a>
          </div> */}
          <div className='flex flex-col gap-1 font-semibold'>
          <p className='text-main font-medium text-3xl'>Отдел кадров Новгород</p>
          <a href='tel:622 12 46' className='font-normal text-black hover:text-main text-2xl'>+7 (816) 262-37-15 (добавочный 150)</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
