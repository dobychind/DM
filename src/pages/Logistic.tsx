import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import PL from '/3plbanner.jpg';
import logistic_main from '/logistic_main.png';
import loc from '/location.png';
// import skl from '/skl.jpg';
import 'aos/dist/aos.css'; // Не забудьте импортировать стили AOS
import FeedbackForm from "../components/logistic/Form";
import ClientSwiper from "../components/distribution/ClientSwiper";
import Map from "../components/distribution/Map";
import Preferences from "../components/logistic/Preferences";
import Footer from "../components/footer/Footer";

const Logistic = () => {
  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <div className="flex flex-col justify-center bg-bg items-center font-body">
      <Navbar logoname="DM" position="fixed" color="text-white" />
      <div className="w-full object-cover relative">
        <h2 className="text-xl md:top-48 left-0 right-0 ml-auto mr-auto absolute pt-8 md:text-5xl 2xl:text-7xl text-center font-title text-white">Логистика ЗPL</h2>
        <img src={logistic_main} alt="Фон 3PL" className="w-full rounded-b-[48px] rounded-br-[48px] md:object-cover md:h-screen max-h-screen" />
      </div>
      <div className="flex py-12 flex-col w-[96vw] lg:w-[89vw] gap-12 md:gap-32 justify-center items-center" >

        <div data-aos="fade-down" data-aos-duration="2000" className='flex bg-white w-full p-8 rounded-2xl'>
          <p className="text-xl md:text-2xl 2xl:text-3xl font-medium">Услуги ответственного хранения 3pl подразумевают прием и создание условий для сохранности вверенных материальных ценностей на территории компании-исполнителя.</p>
        </div>

        <Preferences/>

        <div className="flex flex-col md:flex-row w-full rounded-2xl gap-8 justify-between items-center">
          <div className="flex flex-col gap-3 md:w-3/5 2xl:w-2/3 justify-center">
            <p className="text-2xl 2xl:text-3xl font-bold">По запросу компании-отправителя могут быть предоставлены <span className="text-main">дополнительные услуги</span> по</p>
            <ul className="list-disc flex flex-col ml-8 gap-1">
              <li className="text-xl 2xl:text-2xl font-normal">Обработке</li>
              <li className="text-xl 2xl:text-2xl font-normal">Упаковке и доставке товара</li>
              <li className="text-xl 2xl:text-2xl font-normal">Переупаковка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Полная или частичная перестикировка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Выбраковка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Приемка возвратов</li>
            </ul>
            <p className="text-xl 2xl:text-2xl font-medium">Список выбранных услуг фиксируется в договоре, а их выполнение тщательно планируется для улучшения качества обслуживания и предотвращения ошибок и недочетов</p>
          </div>
          <img className="md:w-2/5 rounded-2xl 2xl:w-1/3 2xl:h-[15vw]" src={PL} alt="" />
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-full px-4 py-3 rounded-2xl'>
          <h3 className='text-xl md:text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Наши партнеры</h3>
          <div className='flex flex-wrap w-full justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
            <ClientSwiper />
          </div>
        </div>

        <div className="flex flex-col w-full gap-8 rounded-2xl ">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex md:w-[140%] justify-center flex-col gap-6 md:gap-8">
              <p className="text-4xl font-bold">Наши <span className="text-main">склады</span> размещены в 3х городах России: </p>

              <div className="flex items-center gap-3">
                <img className="w-[32px]" src={loc} alt="Локация" />
                <p className="text-2xl md:text-3xl font-semibold">Санкт-Петербург</p>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-[32px]" src={loc} alt="Локация" />
                <p className="text-2xl md:text-3xl font-semibold">Москва</p>
              </div>
              <div className="flex items-center gap-3">
                <img className="w-[32px]" src={loc} alt="Локация" />
                <p className="text-2xl md:text-3xl font-semibold">Великий Новгород</p>
              </div>
              <p className='font-normal w-full text-justify'>Стоимость услуг оператора для каждого типа логистики рассчитывается индивидуально.
                <br />Для расчета обратитесь к менеджерам компании, заполнив форму или позвонив по телефону, указанному на сайте.</p>
              <FeedbackForm text="Консультация с логистом" />
            </div>
            <div className="w-full overflow-hidden">
              <Map />

            </div>
          </div>

        </div>

        <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center'>

        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default Logistic;
