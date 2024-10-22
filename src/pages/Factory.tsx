import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import banner from '/banner.png';
import Breadf from '/breadfact.jpg';
import DatesNew from '../components/factory/DatesNew'
// import Bread from '/hppbread.jpg'
import hppbanner from '/hppbanner.jpg';
import Novg from '/novg.png';
import Novg2 from '/novg2.png';
import Novg4 from '/novg4.png';
import Psen from '/psen.png'
import { useEffect, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ClientSwiper from '../components/distribution/ClientSwiper';
import Footer from '../components/footer/Footer';

const Factory = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex font-body bg-bg flex-col justify-center items-center'>
      <Navbar logoname="DM" position='fixed' />
      <div className=' flex w-full bg-white relative justify-end'>
        <div>
          <h2 data-aos="zoom-in" data-aos-duration="1000" className='text-black font-medium font-title md:font-medium text-xl md:text-5xl xl:text-7xl top-20 absolute left-5 md:top-56 md:left-32 max-w-[52%]'>Хлебопекарное предприятие № 1</h2>
          <p data-aos="zoom-in" data-aos-duration="2000" className='text-main w-1/2 text-sm md:w-auto md:text-start bottom-8 md:bottom-auto left-4 md:pt-0 font-normal md:text-xl xl:text-2xl min-[1920px]:text-3xl absolute md:top-[21rem] xl:top-[24rem] md:left-[10rem] xl:left-[15rem] md:max-w-[30%]'>Ключевой производитель хлеба и хлебобулочных изделий в составе группы компаний «Даниэль М».</p>
        </div>
        <img src={banner} alt="banner hpp1" className='w-[50vw]' />
        <div className='mt-4 mb-8 md:mb-0 flex justify-center md:mt-0 absolute md:bottom-8 md:left-16'>
          <Link to="/production/bread"><Button onClick={handleClick} color='main' text='Продукция' /></Link>
        </div>
      </div>

      <div className='flex py-12 bg-bg flex-col w-[96vw] lg:w-[89vw] gap-12 md:gap-24 justify-center items-center'>

        <div className='w-full bg-white shadow-2xl p-6 rounded-2xl md:mt-0 flex flex-col justify-center gap-6 '>
          <h3 className='text-xl md:text-4xl md:text-center font-semibold md:font-bold md:py-8'>Этапы развития собственного производства</h3>
          {/* <Dates /> */}
          <div className='max-w-full  bg-white  rounded-2xl'>
            <DatesNew />
          </div>
        </div>

        <div className='w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-8 w-full md:flex-row md:max-h-[400px] xl:max-h-[370px] 2xl:max-h-[330px]'>
            <div className='flex flex-col md:w-3/5 bg-white rounded-2xl gap-4 md:gap-2 py-10 px-4 lg:py-14 lg:px-7'>
              <p className='text-2xl lg:text-3xl text-justify font-medium'>Наши изделия заслуженно занимают места на полках ведущих федеральных и региональных торговых сетей</p>
              <p className='text-xl lg:text-2xl text-justify font-normal'>Мы развиваемся во всех сегментах продаж хлебобулочных изделий, производя, как традиционные сорта хлебов социальной
                значимости, так и уникальных хлебобулочных и мелкоштучных изделий с добавленной стоимостью.</p>
            </div>
            <div className='h-[300px] object-contain md:h-auto md:w-2/5'>
              <img className='h-full w-full object-cover rounded-2xl' src={Breadf} alt="Наша продукция в магазине" />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-8 w-full'>
            <div className='md:w-[65%]'>
              <img className='h-full w-full object-cover rounded-2xl' src={Novg2} alt="" />
            </div>
            <div className='md:w-[35%]'>
              <img className='h-full w-full object-cover rounded-2xl' src={Novg} alt="" />
            </div>
          </div>
          <div className='flex gap-8 w-full'>
            <div className='w-full h-full hidden md:block'>
              <img className='h-full w-full object-cover rounded-2xl' src={Novg4} alt="" />
            </div>
            <div className='flex justify-center items-center bg-white py-5 px-4 md:px-16 lg:px-20 xl:px-24 rounded-2xl'>
              <p className='text-xl  lg:text-2xl text-main xl:text-4xl 2xl:text-5xl font-semibold'>Также ХПП № 1 восстанавливает Хлебопекарный завод в Великом Новгороде, что будет являться сохранением предприятия имеющего социальную значимость для региона</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-12 md:gap-16 py-8 px-3 md:py-16 md:px-9 bg-white rounded-2xl'>
          <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-20'>
            <div className='flex flex-col w-full gap-4 xl:gap-8 md:w-1/2 2xl:w-3/5'>
              <h3 className='text-3xl md:text-5xl font-semibold text-main'>Наши планы</h3>
              <p className='text-xl md:text-2xl font-normal text-justify'>Активно развивать продукцию под лейблом «Сделано в Великом Новгороде»,
                которое производит Хлебопекарное предприятие № 1.</p>
              <p className='text-xl md:text-2xl font-normal text-justify'>Вывести продукцию под этим брендом на полки крупнейших розничных сетей Санкт-Петербурга и Москвы.</p>
              <p className='text-xl md:text-2xl font-normal text-justify'>Мы стремимся, чтобы каждый покупатель мог оценить качество и уникальность товаров, произведённых в этом древнем городе.</p>
            </div>
            <img src={hppbanner} className='w-full rounded-2xl md:object-contain md:w-1/2 2xl:w-2/5' alt="" />
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-20'>
            <img src={Psen} className='md:w-2/5 object-contain rounded-2xl' alt="Баннер сделано в Великом Новгороде" />
            <div className='flex flex-col w-full gap-4 xl:gap-8 md:w-3/5'>
              <p className='text-xl md:text-2xl font-normal text-justify'>С 2024 года мы с гордостью запускаем нашу новую торговую марку «Мастерская Э.Пшеничного» под вдохновляющим лозунгом «Вкуснее с нами!».
                Бренд посвящён искусству ремесленного хлебопечения и объединяет в себе традиции и инновации.</p>
              <p className='text-xl md:text-2xl font-normal text-justify'>Под маркой «Мастерская Э.Пшеничного» будут производиться хлеба, которые уже завоевали признание гурманов по всему миру: чиабатта, багет, сельский
                и пшеничный хлеб и многое другое.</p>
            </div>
          </div>
          <div className='flex flex-col gap-4 xl:gap-8 w-full'>
            <h3 className='text-xl md:text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Где купить?</h3>
            <div className='flex flex-wrap justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
              <ClientSwiper />
            </div>
          </div>
        </div>

        

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-full  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <div className='flex flex-wrap md:flex-nowrap gap-6 items-center justify-between'>

            <div className='flex md:w-1/3 h-full flex-col justify-between gap-4 md:gap-12'>
              <h5 className='text-main text-2xl font-semibold md:font-bold md:text-3xl min-[1920px]:text-5xl'>СМИ о нас</h5>
              <h5 className='text-2xl min-[1920px]:text-4xl font-semibold'>Статьи</h5>
              <div className='flex h-full gap-8 flex-col justify-evenly min-[1920px]:text-2xl'>
                <a target='_blank' className='hover:underline' href="https://novvedomosti.ru/news/economy/100161/">Новгородский хлеб появился в магазинах Москвы и Санкт-Петербурга | Новгородские ведомости (novvedomosti.ru)</a>
                <a target='_blank' className='hover:underline' href="https://dzen.ru/a/Zs9ZvHrbCR8nMlgZ?share_to=link">У крупнейшей пекарни сменился владелец, но хлеб для жителей Великого Новгорода останется доступным по разумным ценам | РР - новости | Дзен (dzen.ru)</a>
              </div>
            </div>
            <iframe className='rounded-2xl w-full max-h-[200px] md:max-h-none' width="720" height="485" src="https://rutube.ru/play/embed/1569906122342b2625e6c70d94a393a4/" frameBorder="0" allow="clipboard-write; autoplay" allowFullScreen></iframe>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white flex-col gap-8 w-full  px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h5 className='text-xl font-semibold md:font-bold md:text-3xl min-[1920px]:text-5xl'>Наши награды</h5>
          <div className='flex gap-6 items-center justify-between'>
          </div>
        </div>


      </div>

      <Footer/>
    </div>
    
  )
}

export default Factory