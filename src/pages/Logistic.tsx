import Aos from "aos";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar"
// import PL from '/3plbanner.jpg';
import plog from '/plog.png';
// import logistic_main from '/logistic_main.png';
// import loc from '/location.png';
import InputMask from 'react-input-mask';
// import skl from '/skl.jpg';
import 'aos/dist/aos.css'; // Не забудьте импортировать стили AOS
// import FeedbackForm from "../components/logistic/Form";
import ClientSwiper from "../components/distribution/ClientSwiper";
import mapsmall from "/mapsmall.png";
import Preferences from "../components/logistic/Preferences";
import Footer from "../components/footer/Footer";
import Line from "../components/logistic/Line";

const Logistic = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/cQqXUq8o2FQ", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, company })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        }
      })
  }



  return (
    <div className="flex flex-col justify-center bg-bg items-center font-body">
      <Navbar logoname="DM" position="fixed" color="text-white" />
      <div className="w-full object-cover relative">
        <h2 className="text-4xl top-8 md:top-44 left-0 right-0 ml-auto mr-auto absolute pt-8 md:text-5xl 2xl:text-7xl text-center font-title text-white">Логистика ЗPL</h2>
        <img src={plog} alt="Фон 3PL" className="w-full h-[40vh] rounded-b-[48px] rounded-br-[48px] md:object-cover md:h-screen max-h-screen" />
      </div>
      <div className="flex py-12 flex-col w-[96vw] lg:w-[89vw] gap-8 md:gap-24 justify-center items-center" >

        <div className="flex flex-col gap-8">
          <Preferences />
          <Line />
        </div>


        <div className="flex flex-col md:flex-row w-full rounded-2xl gap-8 bg-[url('/supply.jpg')] bg-cover h-[85vh] md:h-screen min-[1920px]:h-[70vh] bg-bottom justify-between">
          <div className="flex flex-col pt-2 pl-2 md:pt-16 md:pl-16 gap-6 md:w-3/5 2xl:w-2/3">
            <p className="text-2xl 2xl:text-3xl font-bold min-[1920px]:w-1/2">По запросу компании-отправителя могут быть предоставлены <span className="text-main">дополнительные услуги</span> по</p>
            <ul className="list-disc flex flex-col ml-8 gap-1">
              <li className="text-xl 2xl:text-2xl font-normal">Обработке</li>
              <li className="text-xl 2xl:text-2xl font-normal">Упаковке и доставке товара</li>
              <li className="text-xl 2xl:text-2xl font-normal">Переупаковка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Полная или частичная перестикировка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Выбраковка</li>
              <li className="text-xl 2xl:text-2xl font-normal">Приемка возвратов</li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2000" className='flex flex-col bg-white gap-8 w-full px-4 py-3 rounded-2xl'>
          <h3 className='text-2xl text-center font-semibold md:text-3xl min-[1920px]:text-5xl md:font-bold'>Наши партнеры</h3>
          <div className='flex flex-wrap w-full justify-between md:flex-nowrap gap-2 md:gap-6 items-center md:justify-around'>
            <ClientSwiper />
          </div>
        </div>


        <div className="flex flex-col w-full gap-8 justify-between items-center">

          <div className="flex flex-col md:flex-row h-full justify-center w-full gap-8 rounded-2xl ">
            <div className="flex md:max-h-[700px] bg-white rounded-2xl justify-between  flex-col md:flex-row gap-8">
              <div className="flex md:w-[100%] mx-8 justify-center flex-col gap-6 md:gap-8">
                <p className=" text-2xl md:text-4xl font-bold md:w-max pt-4 border-b-2 border-main">Наши <span className="text-main">склады</span> размещены в 3х городах России </p>
                <img src={mapsmall} className="w-full rounded-2xl max-h-[500px] object-cover" alt="Карта складов" />
              </div>
            </div>
            <div className="md:w-1/3 bg-[url('/statLogistic.png')]  p-4 rounded-2xl flex flex-col justify-around gap-4">
              <p className='font-medium text-3xl w-full text-justify'>Заказать консультацию</p>
              <p className='font-normal text-sm w-full text-justify'>Стоимость услуг оператора для каждого типа логистики рассчитывается индивидуально.
                <br />Для расчета обратитесь к менеджерам компании, заполнив форму или позвонив по телефону, указанному на сайте.</p>
              <form className="flex w-full  flex-col gap-4 rounded-2xl" onSubmit={onSubmit}>
                <div className='flex w-full gap-8 '>
                  <div className="w-full flex flex-col gap-4">
                    <input
                      className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                      placeholder="Имя"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                      placeholder="Название юридического лица"
                      type="company"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />

                    <InputMask
                      className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                      placeholder="Телефон"
                      id="phone"
                      mask="+7(999)-999-99-99"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <input
                      className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                      placeholder="Email"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />


                  </div>

                </div>
                <div>
                  <label htmlFor="opd">  <input type="checkbox" id="opd" /> Согласен с обработкой <a href="/policy.pdf" download>Персональных данных</a></label>
                </div>
                <button className="w-4/5 ml-auto md:w-1/3 text-center p-3 bg-main rounded-xl text-white border border-main items-end hover:bg-transparent hover:text-main text-xl" type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Logistic;
