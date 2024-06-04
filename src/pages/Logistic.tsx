import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import Car from '/Gazlog.png';
import Samokat from '/samokat.png';
import Lenta from '/lenta.jpg';
import 'aos/dist/aos.css'; // Не забудьте импортировать стили AOS
import Button from "../components/button/Button";
import ClientSwiper from "../components/distribution/ClientSwiper";

const Logistic = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const handleClick = () => {
    console.log("click")
  }

  return (
    <div>
      <Navbar />
      <div className="flex w-full justify-center items-center px-4 py-8 flex-col bg-bg" >
        <h2 className="text-4xl font-semibold">Логистика</h2>
        <div className="flex flex-col gap-6 justify-center items-center relative">
          <div className="flex gap-4 w-4/5 pt-16">
            <div className='w-3/5 h-full mt-36'>
              <img
                data-aos='fade-right'
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-easing="linear"
                src={Car}
                alt='brand car'
                className='w-full h-full ease-in duration-[400ms]'
              />
            </div>
            <p data-aos='fade-up' data-aos-duration="1000"
              className="w-3/5 text-3xl leading-normal font-semibold text-end">
              В 2019г. произошел запуск проекта по оказанию логистических услуг на базе дистрибьюторского опыта.
            </p>
            <div className="border-2 border-dashed"></div>
          </div>

          <div className=" w-[80%] ">
            <p className="w-full ml-auto text-3xl leading-normal font-semibold text-end">Основные пренимущества компании "Даниэль М"</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-24">

            <div className="flex w-4/5 flex-col p-6 gap-10 bg-white border border-black rounded-2xl">
              <p className="text-3xl pb-3 font-semibold text-center border-black border-b-4">
                Консолидация производителей через договор поставки
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4 w-1/2">
                  <p className="text-xl py-3 px-8  font-semibold border rounded-2xl border-black">Заказ одному поставщику - доставка в одной машине всей категории ХБИ</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main font-bold">НЕТ</span> привязок по квантам/лоткам (Доставка от 1шт)</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main font-bold">НЕТ</span> ограничений по минимальной сумме заказа</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Возможность сотрудничества с "Ремесленными пекарнями"</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Уменьшение издержек всех участников - <span className="text-main font-bold">лучшая</span> цена для потребителя!</p>
                </div>
                <div className="flex flex-col gap-8 justify-center w-[35%] mx-auto">
                  <img src={Samokat} alt="" className="rounded-3xl" />
                  <p className="font-medium"><span className="font-bold text-blue text-3xl">Пример:</span><br />
                    - <b>Самокат</b> более 600 ТТ (Осуществление поставок всех производителей ХБИ через «Даниэль М».) </p>
                </div>
              </div>
            </div>


            {/* 3PL */}

            <div className="flex w-4/5 flex-col p-6 gap-10 bg-white border border-black rounded-2xl">
              <p className="text-3xl pb-3 font-semibold text-center border-black border-b-4">
                Поставки по системе 3PL
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4 w-1/2">
                  <p className="text-xl py-3 px-8  font-semibold border rounded-2xl border-black">Заказы формируются производителям -доставка в одной машине всей категории ХБИ. Отдельные накладные.</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Условия по минимальной сумме заказа по всем производителям согласовываются индивидуально</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black "> Уменьшение издержек <span className="text-main font-bold">всех проиводителей</span> – по затратам на логистику</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Укладка/квант - по всем производителям согласовываются индивидуально</p>
                </div>
                <div className="flex flex-col gap-8 justify-center w-[35%] mx-auto">
                  <img src={Lenta} alt="" className="rounded-3xl h-1/2" />
                  <p className="font-medium"><span className="font-bold text-blue text-3xl">Пример:</span><br />
                    - <b>Лента</b> более 600 ТТ (Осуществление поставок 3PL ассортимента «ПЕКО» в Москве) </p>
                </div>
              </div>
            </div>
            <div className="flex w-full h-28">
              <ClientSwiper />
            </div>
            <Button text="Присоединиться" color="main" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistic;
