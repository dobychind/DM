import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Navbar from '../components/navbar/Navbar'
import prodMain from '/prodMain.jpg';
import DatesNew from '../components/factory/DatesNew'
import hppbanner from '/hppbanner.jpg';
// import hppbread from '/hppbread.jpg';
import Novg from '/novg.png';
import hpp from '/hppround.png';
import breadpres from '/breadpres.jpg';
// import Novg2 from '/novg2.jpg';
// import Novg4 from '/novg4.jpg';
import psenlogo from '/psenlogo.png';
import shop from '/shop.jpg';
// import Psen from '/psen.png';
import PsenBack from '/PsenBack.png';
import best from '/best.png';
import cheer from '/cheer.png';
import second from '/second.png';
import thanks from '/thanks.png';
// import psenic from '/psenic.jpg';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ClientSwiper from '../components/distribution/ClientSwiper';
import Footer from '../components/footer/Footer';
import Possibilities from '../components/factory/Possibilities';

const Factory = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex font-body bg-bg flex-col justify-center items-center'>
      <Navbar logoname="Hpp" position='fixed' color='text-white' />
      <div className='flex w-full md:h-screen bg-white relative justify-end'>
        <div className='absolute flex flex-col gap-4 top-24 left-5 md:top-56 md:left-[8rem] min-[1920px]:top-[35%]'>
          <h2 data-aos="zoom-in" data-aos-duration="1000"
            className='text-black font-medium font-title md:font-medium text-2xl w-full 
           md:text-5xl xl:text-7xl md:max-w-[60%]'>Хлебопекарное предприятие №1</h2>
          <p data-aos="zoom-in" data-aos-duration="2000"
            className='text-main text-sm md:pt-0 font-normal hidden min-[426px]:block 
           md:text-xl md:w-auto md:text-start md:bottom-auto md:max-w-[52%]
           xl:text-2xl
           min-[1920px]:text-3xl '>Ключевой производитель хлеба и хлебобулочных изделий в составе группы компаний «Даниэль М».</p>
        </div>
        <img src={prodMain} alt="Главная картинка на странице производства" className='object-cover w-full md:w-screen md:h-screen' />
        <div className='mt-4 mb-8 md:mb-0 flex justify-center md:mt-0 absolute md:bottom-8 md:left-[8rem]'>
          <Link to="/production/bread"><Button onClick={handleClick} color='main' text='Продукция' /></Link>
        </div>
      </div>


      <div className='flex py-12 bg-bg flex-col w-[96vw] lg:w-[89vw] gap-12 md:gap-24 justify-center items-center'>
        <div className='w-full bg-white p-3 md:p-6 rounded-2xl md:mt-0 flex flex-col justify-center gap-6 '>
          <h3 className='text-xl md:text-4xl md:text-center font-semibold md:font-bold md:py-8'>Этапы развития собственного производства</h3>
          <div className='max-w-full w-[99%]  bg-white  rounded-2xl'>
            <DatesNew />
          </div>
        </div>

        <Possibilities />


        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='w-full flex flex-col gap-8'>
          <div className='flex flex-col gap-8 bg-white relative rounded-2xl w-full md:flex-row md:max-h-[400px] xl:max-h-[370px] 2xl:max-h-[330px]'>
            <div className='flex flex-col md:w-3/5 relative gap-4 md:gap-2 py-10 px-4 lg:py-14 lg:px-7'>
              <p className='text-2xl w-[95%] lg:text-3xl text-justify font-medium'>Наши изделия заслуженно занимают места на полках ведущих федеральных и региональных торговых сетей</p>
              <p className='text-lg w-[95%] lg:text-2xl text-justify font-normal'>Мы развиваемся во всех сегментах продаж хлебобулочных изделий, производя, как традиционные сорта хлебов социальной
                значимости, так и уникальных хлебобулочных и мелкоштучных изделий с добавленной стоимостью.</p>
            </div>
            <div className='h-[300px] relative  md:h-auto md:w-2/5'>
              <img src={hpp} alt="" className='absolute z-30 top-[25%] left-[-75px] h-[150px]' />
              <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='h-full w-full object-cover rounded-2xl' src={Novg} alt="Наша продукция в магазине" />
            </div>
          </div>

          <div className='flex flex-col md:flex-row  relative bg-white rounded-2xl gap-8 w-full'>
            <div className='w-full md:max-h-[330px] h-full rounded hidden md:block'>
              <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='h-full md:max-h-[330px] w-full object-cover rounded-2xl' src={breadpres} alt="" />
            </div>
            <div className='flex justify-center relative items-center py-5 px-4 md:px-16 lg:px-20 xl:px-24'>
              <img src={hpp} alt="" className='absolute object-contain  top-1/5 left-[-100px] h-[150px]' />
              <p className='text-xl  lg:text-2xl text-main xl:text-4xl font-semibold'>Также ХПП № 1 восстанавливает Хлебопекарный завод в Великом Новгороде, что будет являться сохранением предприятия имеющего социальную значимость для региона</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='flex flex-col w-full gap-12 md:gap-16  rounded-2xl'>
          <div className='flex flex-col h-full items-center justify-between gap-8 md:gap-8'>
            <div className="flex flex-col w-full h-full px-5 py-4 md:p-12 md:py-16 bg-[url('/backcorp.png')] bg-cover md:gap-12 gap-8 rounded-2xl">
              <h3 className='text-3xl w-full md:text-5xl text-start font-semibold text-white'>Наши планы</h3>

              <div className="flex flex-col md:flex-row gap-4 md:gap-24 justify-between items-stretch">
                <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='flex gap-2 w-full'>
                  <p className='text-7xl font-bold text-white'>1.</p>
                  <p className="border bg-main border-white p-3 rounded-2xl text-2xl text-white md:text-2xl leading-snug font-normal text-justify">
                    Активно развивать продукцию под лейблом «Сделано в Великом Новгороде», которое производит Хлебопекарное предприятие №1.
                  </p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1300" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='flex gap-2 w-full'>
                  <p className='text-7xl font-bold text-white'>2.</p>

                  <p className="border bg-main border-white p-3 rounded-2xl text-2xl text-white md:text-2xl leading-snug font-normal text-justify">
                    Вывести продукцию под этим брендом на полки крупнейших розничных сетей Санкт-Петербурга и Москвы.
                  </p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1600" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='flex gap-2 w-full'>
                  <p className='text-7xl font-bold text-white'>3.</p>

                  <p className="border bg-main border-white p-3 rounded-2xl text-2xl text-white md:text-2xl leading-snug font-normal text-justify">
                    Мы стремимся, чтобы каждый покупатель мог оценить качество и уникальность товаров, произведённых в этом древнем городе.
                  </p>
                </div>
              </div>


              <div className='hidden md:flex flex-row rounded-2xl justify-evenly overflow-hidden'>
                <img src={hppbanner} className='w-1/3 border border-white rounded-2xl object-cover' alt="" />
                <img src={shop} className='w-1/3 border border-white rounded-2xl object-cover' alt="" />
              </div>

            </div>
          </div>
        </div>


        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom" className="flex w-full flex-col relative gap-12 md:gap-16 bg-white rounded-2xl">

          <img src={PsenBack} alt="" className='hidden max-h-[600px] object-cover md:block rounded-2xl' />


          <div className="flex flex-col md:w-[40%] h-full justify-center md:absolute px-5 py-4 right-8 gap-8 md:gap-12 ">
            {/* <h3 className='text-3xl md:text-end md:text-5xl w-max font-semibold text-main'>Мастерская Пшеничного</h3> */}
            <img src={psenlogo} alt="" />
            <div className='flex flex-col ml-auto gap-4 justify-end xl:gap-8'>
              <div className='w-full'>
                <p className='text-lg md:text-2xl font-normal text-justify'>С 2024 года мы с гордостью запускаем нашу новую торговую марку «Мастерская Э.Пшеничного» под вдохновляющим лозунгом «Вкуснее с нами!».
                  Бренд посвящён искусству ремесленного хлебопечения и объединяет в себе традиции и инновации.</p>
              </div>
            </div>
          </div>

        </div>

        <div data-aos="fade-down" data-aos-duration="1000" data-aos-once="true" data-aos-anchor-placement="top-bottom" className='flex flex-col w-full gap-12 md:gap-16 py-8 px-3 md:py-16 md:px-9 bg-white rounded-2xl'>

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

        <div className='flex bg-white flex-col gap-8 w-full px-4 py-3 md:px-12 md:py-8 rounded-2xl'>
          <h5 className='text-xl font-semibold md:font-bold md:text-3xl min-[1920px]:text-5xl'>Наши награды</h5>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

            {/* Большой блок для горизонтальной награды */}
            <div className='md:row-span-2'>
              <div className='md:col-span-1 flex items-center justify-center rounded-lg shadow-md p-4'>
                <img src={best} alt="Награда 1" className='object-contain h-full w-full' />
              </div>
              {/* Большой блок для горизонтальной награды */}
              <div className='md:col-span-1  flex items-center justify-center rounded-lg shadow-md p-4'>
                <img src={cheer} alt="Награда 4" className='object-contain h-full w-full' />
              </div>
            </div>


            {/* Вертикальная награда */}
            <div className='md:row-span-2 flex items-center justify-center rounded-lg shadow-md p-4'>
              <img src={second} alt="Награда 2" className='object-contain h-full w-full' />
            </div>

            {/* Вертикальная награда */}

            <div className='md:row-span-2 flex items-center justify-center rounded-lg shadow-md p-4'>
              <img src={thanks} alt="Награда 3" className='object-contain h-full w-full' />
            </div>

          </div>
        </div>





      </div>

      <Footer />
    </div>

  )
}

export default Factory