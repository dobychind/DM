import { useEffect } from "react";
import FeedbackForm from "../components/logistic/Form"
import Navbar from "../components/navbar/Navbar";
import Banner from '/distbanner.png';
import Aos from "aos";
import 'aos/dist/aos.css'
import Possibilities from "../components/distributionPage/Possibilities";
import Preferences from "../components/distributionPage/Preferences";
import FreshBread from "../components/distributionPage/distBan";
import ClientSwiper from "../components/distribution/ClientSwiper";
import ClientSwiperLog from "../components/distributionPage/ClientSwiper";
import Footer from "../components/footer/Footer";


const Distribution = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="font-body">

      <div className="flex w-full justify-center items-center  flex-col">
      <Navbar logoname="DM" color="text-white" position="fixed" />
        <div className="w-full relative overflow-hidden ">
          <img className="h-screen rounded-b-[48px] rounded-br-[48px] w-full object-cover z-10" src={Banner} alt="" />
          <p data-aos="fade-down" data-aos-duration="2000" className="absolute left-4 w-[70%] md:w-fit 2xl:w-fit md:left-auto md:right-12 bottom-[25%] z-30 text-2xl md:text-5xl 2xl:text-7xl text-white font-title">Первый профессиональный<br /> дистрибьютор хлеба в России</p>
        </div>

        <div className="flex w-full px-3 md:px-0 flex-col gap-16 py-4 md:py-16 lg:w-[96%]">
          <div className="mt-8 flex flex-col justify-center items-center gap-16">
            <div className="flex flex-col gap-6 w-full">
              <h3 className="font-semibold text-main text-2xl md:text-3xl p-4 text-center">
                Наши Достижения
              </h3>
              <Preferences />
            </div>


            <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-full px-4 py-3 rounded-2xl'>
              <h3 className='text-2xl text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Наши клиенты</h3>
              <div className='flex flex-wrap w-full justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
                <ClientSwiperLog />
              </div>
            </div>

            <div className="w-full h-full" data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300">
              <FreshBread />
            </div>
            <div className="w-full h-full" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="600">
              <Possibilities />
            </div>
            <FeedbackForm text="Стать частью пула поставщиков" />

            <div data-aos="fade-down" data-aos-duration="2000" data-aos-delay="200" className='flex flex-col bg-white gap-8 w-full px-4 py-3 rounded-2xl'>
              <h3 className='text-xl md:text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Наши партнеры</h3>
              <div className='flex flex-wrap w-full justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
                <ClientSwiper />
              </div>
            </div>


          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Distribution
