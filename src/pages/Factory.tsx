import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import banner from '/banner.png';
import Breadf from '/breadfact.jpg';
import DatesNew from '../components/factory/DatesNew'
import Bread from '/hppbread.jpg'
import hppbanner from '/hppbanner.jpg';
import Novg from '/novg.jpg';
import Novg2 from '/novg2.jpg';
import Novg4 from '/novg4.jpg';
import Psen from '/psen.png'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ClientSwiper from '../components/distribution/ClientSwiper';

const Factory = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex font-body bg-white flex-col justify-center items-center'>
      <Navbar logoname="DM" position='fixed' />
      <div className=' flex w-full bg-white relative justify-end'>
        <div>
          <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-black font-medium font-title md:font-medium text-lg md:text-5xl xl:text-7xl top-14 absolute left-5 md:top-56 md:left-32 max-w-[52%]'>Хлебопекарное предприятие № 1</h2>
          <p data-aos="zoom-in" data-aos-duration="2000" className='text-main w-[96%] text-center md:w-auto md:text-start pt-6 md:pt-0 font-normal md:text-xl xl:text-2xl min-[1920px]:text-3xl md:absolute md:top-[21rem] xl:top-[24rem] md:left-[10rem] xl:left-[15rem] md:max-w-[30%]'>Ключевой производитель хлеба и хлебобулочных изделий в составе группы компаний «Даниэль М».</p>
        </div>
        <img src={banner} alt="banner hpp1" className='' />
        <div className='mt-4 mb-8 md:mb-0 flex justify-center md:mt-0 absolute md:bottom-8 md:left-16'>
          <Link to="/production/bread"><Button onClick={handleClick} color='main' text='Продукция' /></Link>
        </div>
      </div>

      <div className='flex py-12 bg-bg flex-col w-[96vw] lg:w-[89vw] gap-12 md:gap-24 justify-center items-center'>

        <div className='w-[96%] bg-white shadow-2xl rounded-2xl mt-8 md:mt-0 flex flex-col justify-center gap-6 '>
          <h3 className='text-xl md:text-4xl md:text-center font-semibold md:font-bold md:py-8'>Этапы развития собственного производства</h3>
          {/* <Dates /> */}
          <div className='max-w-full  bg-white p-6 rounded-2xl'>
            <DatesNew />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h3 className='text-xl font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Наши изделия заслуженно занимают места на полках ведущих федеральных и региональных торговых сетей</h3>
          <div className='flex flex-wrap justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
            <img className='w-[47%] md:w-1/4 rounded-2xl' src={Bread} alt="Хлебный отдел в магазине" />
            <img className='w-[47%] md:w-1/4 rounded-2xl' src={Breadf} alt="" />
            <p className='md:w-1/2 mt-3 md:mt-0 text-xl min-[1920px]:text-3xl font-normal'>Мы развиваемся во всех сегментах продаж хлебобулочных изделий, производя, как традиционные сорта хлебов социальной значимости, так и уникальных хлебобулочных и мелкоштучных изделий с добавленной стоимостью.</p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h3 className='text-xl font-semibold md:text-xl lg:text-2xl min-[1920px]:text-5xl md:font-bold'>Также ХПП № 1 восстанавливает Хлебопекарный завод В Великом Новгороде, что будет являться сохранением предприятия имеющего социальную значимость для региона</h3>
          <div className='flex flex-wrap gap-3 md:gap-6 items-center justify-around'>
            <img className='md:w-[30%] md:object-cover min-[1920px]:object-contain max-h-[300px] min-[1920px]:max-h-max rounded-2xl' src={Novg} alt="Хлебный отдел в магазине" />
            <img className='w-[45%] md:object-cover min-[1920px]:object-contain md:w-[30%] max-h-[300px] min-[1920px]:max-h-max rounded-2xl' src={Novg2} alt="" />
            <img className='w-[45%] md:object-cover min-[1920px]:object-contain md:w-[30%] max-h-[300px] min-[1920px]:max-h-max rounded-2xl' src={Novg4} alt="" />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl '>
          <h5 className='text-lg font-semibold md:text-xl lg:text-2xl min-[1920px]:text-5xl'> В наших планах — активно развивать продукцию под лейблом «Сделано в Великом Новгороде», которое производит Хлебопекарное предприятие № 1.</h5>
          <div className='flex flex-col-reverse md:flex-row gap-6 items-center justify-between'>
            <p className='md:w-3/5 text-lg md:text-xl min-[1920px]:text-3xl'>
              Вывести продукцию под этим брендом на полки крупнейших розничных сетей Санкт-Петербурга и Москвы.
              <br />
              Мы стремимся, чтобы каждый покупатель мог оценить качество и уникальность товаров, произведённых в этом древнем городе. </p>
            <img src={hppbanner} className='md:w-2/5 rounded-2xl' alt="Баннер сделано в Великом Новгороде" />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h3 className='text-xl md:text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Где купить?</h3>
          <div className='flex flex-wrap justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
            <ClientSwiper />
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h5 className='text-lg font-semibold md:text-xl lg:text-2xl min-[1920px]:text-5xl'>С 2024 года мы с гордостью запускаем нашу новую торговую марку «Мастерская Э.Пшеничного» под вдохновляющим лозунгом «Вкуснее с нами!».
            <br />Этот бренд посвящён искусству ремесленного хлебопечения и объединяет в себе традиции и инновации.</h5>
          <div className='flex flex-wrap md:flex-nowrap gap-6 items-center justify-between'>
            <img src={Psen} className='md:w-2/5 rounded-2xl' alt="Баннер сделано в Великом Новгороде" />

            <p className='md:w-3/5 text-lg md:text-xl min-[1920px]:text-3xl'>
              Под маркой «Мастерская Э.Пшеничного» будут производиться хлеба, которые уже завоевали признание гурманов по всему миру: чиабатта, багет, сельский и пшеничный хлеб и тд. </p>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h5 className='text-xl font-semibold md:font-bold md:text-3xl min-[1920px]:text-5xl'>Наши награды</h5>
          <div className='flex gap-6 items-center justify-between'>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-[96%]  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h5 className='text-2xl font-semibold md:font-bold md:text-3xl min-[1920px]:text-5xl'>СМИ о нас</h5>
          <div className='flex flex-wrap md:flex-nowrap gap-6 items-center justify-between'>
            <iframe className='rounded-2xl w-full' width="720" height="405" src="https://rutube.ru/play/embed/1569906122342b2625e6c70d94a393a4/" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
            <div className='flex md:w-1/3 h-full flex-col justify-between gap-4 md:gap-12'>
              <h5 className='text-2xl min-[1920px]:text-4xl font-semibold'>Статьи</h5>
              <div className='flex h-full gap-8 flex-col justify-evenly min-[1920px]:text-2xl'>
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