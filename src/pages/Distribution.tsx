import { useEffect } from "react";
import FeedbackForm from "../components/logistic/Form"
import Navbar from "../components/navbar/Navbar";
import Banner from '/distbanner.jpg';
import Logo from "/DmLogo.svg";
import Aos from "aos";
import 'aos/dist/aos.css'
import Possibilities from "../components/distributionPage/Possibilities";


const Distribution = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-body">
      <div className="flex w-full justify-center items-center  flex-col">
        <div className="w-full relative">
          <Navbar logoname="DM" position="fixed" />
          <img className="h-screen md:h-full w-full object-cover z-10" src={Banner} alt="" />
          <img className="max-w-[200px] absolute top-28 right-16" src={Logo} alt="Логотип Даниэль" />
          <p data-aos="zoom-in" data-aos-duration="1000" className="absolute left-6 md:left-auto md:right-64 top-[40%] z-30 text-6xl md:text-7xl text-white font-semibold  font-title">Свежий хлеб -</p>
          <p data-aos="zoom-in" data-aos-duration="2500" className="absolute right-8 md:right-52 top-[57%] text-end md:text-start md:top-[48%] z-30 text-5xl text-white font-semibold  font-title">каждый день!</p>
        </div>

        <div className="flex flex-col gap-16 py-16 lg:w-[96%]">
          <div className="mt-8 flex flex-col justify-center items-center gap-8">
            <p className="text-3xl font-bold">Первый профессиональный дистрибьютор хлеба в России</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6">

              <div className="relative flex items-center justify-center font-semibold text-xl w-[17rem] h-64 rounded-2xl">
                <div className="absolute h-64 bg-main  text-white transition-opacity p-8 z-20 hover:opacity-0 duration-500 rounded-2xl">Устойчивое присутствие на рынке</div>
                <div className="absolute h-64 bg-white text-main p-8 w-full z-10">Группа компаний, успешно работает на рынке с 2012 года.</div>
              </div>

              <div className="relative flex items-center justify-center font-semibold text-xl w-[17rem] h-64 rounded-2xl">
                <div className="absolute h-64 bg-main text-white transition-opacity p-8 z-20 hover:opacity-0 duration-500 rounded-2xl">Высокий ежемесячный оборот</div>
                <div className="absolute h-64 bg-white text-main  p-8 w-full z-10">Ежемесячный оборот по группе компаний составляет 120 млн рублей.</div>
              </div>
              <div className="relative flex items-center justify-center font-semibold text-xl w-[17rem] h-64 rounded-2xl">
                <div className="absolute h-64 bg-main text-white font-semibold text-xl transition-opacity p-8 z-20 hover:opacity-0 duration-500 rounded-2xl">Лидер в дистрибуции</div>
                <div className="absolute h-64 bg-white text-main p-8 pt-4 w-full z-10">Крупнейший дистрибьютор хлеба и хлебобулочных изделий в трех регионах России – Санкт-Петербург, Москва, Великий Новгород.</div>
              </div>
              <div className="relative flex items-center justify-center font-semibold text-xl w-[17rem] h-64 rounded-2xl">
                <div className="absolute h-64 bg-main text-white transition-opacity p-8 z-20 hover:opacity-0 duration-500 rounded-2xl">Прямые контракты с поставщиками</div>
                <div className="absolute h-64 bg-white text-main p-8 pt-0 w-full z-10">Налаженные прямые контракты с поставщиками хлебобулочных изделий для всех сетей СЗФО и ЦФО, а также для локальных сетей и онлайн-ритейла.</div>
              </div>
              <div className="relative flex items-center justify-center font-semibold text-xl w-[17rem] h-64 rounded-2xl">
                <div className="absolute h-64 bg-main text-white transition-opacity p-8 z-20 hover:opacity-0 duration-500 rounded-2xl">Новаторы в онлайн-ритейле присутствие на рынке</div>
                <div className="absolute h-64 bg-white text-main p-8 w-full z-10">С 2019 года первыми начали поставки хлебобулочных изделий в онлайн-ритейл: Самокат и Яндекс Лавку.</div>
              </div>

            </div>
          </div>
          <Possibilities/>
          <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center'>
            <FeedbackForm text="Стать частью пула поставщиков" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Distribution
