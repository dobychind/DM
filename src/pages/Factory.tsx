import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
// import Dates from '../components/factory/Dates'
import Navbar from '../components/navbar/Navbar'

import hpp from '/HppLogo.png'
import Banner from '/banner.jpg';
import Breadf from '/breadfact.jpg';
// import BreadShop from '/breadshop.jpg'
import DatesNew from '../components/factory/DatesNew'
import Bread from '/hppbread.jpg'
import hppbanner from '/hppbanner.jpg';
import Novg from '/novg.jpg';
import Novg2 from '/novg2.jpg';
import Novg3 from '/novg3.jpg';
import Novg4 from '/novg4.jpg';
import Psen from '/psen.png'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'





const Factory = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex font-body bg-bg flex-col justify-center items-center pb-12'>
      <Navbar position='block' />

      <div className='w-full bg-white relative'>
        <img src={Banner} alt="banner hpp1" className='' />
        <img src={hpp} alt="Hpp Logotype" className='absolute w-16 top-1 right-1 md:top-4 md:right-4 md:w-48' />
        <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-amber-900 font-semibold  md:font-medium text-lg md:text-5xl top-14 absolute right-5 md:top-56 md:right-36 max-w-[48%]'>Хлебопекарное предприятие № 1</h2>
        <p data-aos="zoom-in" data-aos-duration="2000" className='text-main w-[96%] text-center md:w-auto md:text-start pt-6 md:py-6 md:pt-0 font-normal md:text-3xl md:absolute md:top-[22rem] md:right-32 md:max-w-[40%]'>Ключевой производитель хлеба и хлебобулочных изделий в составе группы компаний «Даниэль М».</p>

        <div className='mt-4 mb-8 md:mb-0 flex justify-center md:mt-0 md:absolute md:bottom-16 md:right-16'>
          <Link to="/production/bread"><Button onClick={handleClick} color='main' text='Продукция' /></Link>
        </div>
      </div>

      <div className='flex w-full flex-col gap-12 md:gap-24 justify-center items-center'>

        <div className='w-[96%] mt-8 md:mt-0 flex flex-col justify-center gap-6 md:w-[86%]'>
          <h3 className='text-xl md:text-4xl font-semibold md:font-bold md:py-8'>Этапы развития собственного производства</h3>
          {/* <Dates /> */}
          <div className='max-w-full  bg-white p-6 rounded-2xl shadow-2xl'>
            <DatesNew />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h3 className='text-xl font-semibold md:text-3xl md:font-bold'>Наши изделия заслуженно занимают места на полках ведущих федеральных и региональных торговых сетей</h3>
          <div className='flex flex-wrap justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
            <img className='w-[47%] md:w-1/4 rounded-2xl' src={Bread} alt="Хлебный отдел в магазине" />
            <img className='w-[47%] md:w-1/4 rounded-2xl' src={Breadf} alt="" />
            <p className='md:w-1/2 mt-3 md:mt-0 text-xl font-normal'>Мы развиваемся во всех сегментах продаж хлебобулочных изделий, производя, как традиционные сорта хлебов социальной значимости, так и уникальных хлебобулочных и мелкоштучных изделий с добавленной стоимостью.</p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h3 className='text-xl font-semibold md:text-3xl md:font-bold'>Также ХПП № 1 восстанавливает Хлебопекарный завод В Великом Новгороде, что будет являться сохранением предприятия имеющего социальную значимость для региона</h3>
          <div className='flex flex-wrap gap-3 md:gap-6 items-center justify-around'>
            <img className='md:w-1/2 rounded-2xl' src={Novg} alt="Хлебный отдел в магазине" />
            <img className='w-[45%] md:w-1/3 rounded-2xl' src={Novg3} alt="" />
            <img className='w-[45%] md:w-[30%] rounded-2xl' src={Novg2} alt="" />
            <img className='w-[45%] md:w-[30%] rounded-2xl' src={Novg4} alt="" />
            <img className='w-[45%] md:w-[30%] rounded-2xl' src={Breadf} alt="" />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h5 className='text-lg font-semibold md:text-xl'> В наших планах — активно развивать продукцию под лейблом «Сделано в Великом Новгороде», которое производит Хлебопекарное предприятие № 1.</h5>
          <div className='flex flex-col-reverse md:flex-row gap-6 items-center justify-between'>
            <p className='md:w-3/5 text-lg md:text-xl'>
              Вывести продукцию под этим брендом на полки крупнейших розничных сетей Санкт-Петербурга и Москвы.
              <br />
              Мы стремимся, чтобы каждый покупатель мог оценить качество и уникальность товаров, произведённых в этом древнем городе. </p>
            <img src={hppbanner} className='md:w-2/5 rounded-2xl' alt="Баннер сделано в Великом Новгороде" />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h5 className='text-lg font-semibold md:text-xl'>С 2024 года мы с гордостью запускаем нашу новую торговую марку «Мастерская Э.Пшеничного» под вдохновляющим лозунгом «Вкуснее с нами!».
            <br />Этот бренд посвящён искусству ремесленного хлебопечения и объединяет в себе традиции и инновации.</h5>
          <div className='flex flex-wrap md:flex-nowrap gap-6 items-center justify-between'>
            <img src={Psen} className='md:w-2/5 rounded-2xl' alt="Баннер сделано в Великом Новгороде" />

            <p className='md:w-3/5 text-lg md:text-xl'>
              Под маркой «Мастерская Э.Пшеничного» будут производиться хлеба, которые уже завоевали признание гурманов по всему миру: чиабатта, багет, сельский и пшеничный хлеб и тд. </p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h5 className='text-xl font-semibold md:font-bold md:text-3xl'>Наши награды</h5>
          <div className='flex gap-6 items-center justify-between'>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%] md:w-[80%] px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
          <h5 className='text-2xl font-semibold md:font-bold md:text-3xl'>СМИ о нас</h5>
          <div className='flex flex-wrap md:flex-nowrap gap-6 items-center justify-between'>
            <iframe className='rounded-2xl w-full' width="720" height="405" src="https://rutube.ru/play/embed/1569906122342b2625e6c70d94a393a4/" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
            <div className='flex md:w-1/3 h-full flex-col justify-between gap-4 md:gap-12'>
              <h5 className='text-2xl font-semibold'>Статьи</h5>
              <div className='flex h-full gap-8 flex-col justify-evenly'>
                <a target='_blank' className='hover:underline' href="https://novvedomosti.ru/news/economy/100161/">Новгородский хлеб появился в магазинах Москвы и Санкт-Петербурга | Новгородские ведомости (novvedomosti.ru)</a>
                <a target='_blank' className='hover:underline' href="https://dzen.ru/a/Zs9ZvHrbCR8nMlgZ?share_to=link">У крупнейшей пекарни сменился владелец, но хлеб для жителей Великого Новгорода останется доступным по разумным ценам | РР - новости | Дзен (dzen.ru)</a>
              </div>
            </div>

          </div>
        </div>


      </div>


    </div>
  )
}

export default Factory