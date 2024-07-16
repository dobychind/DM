import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import PL from '/3plbanner.jpg';
import loc from '/location.png';
import skl from '/skl.jpg';
import Lenta from '/lenta.jpg';
import 'aos/dist/aos.css'; // Не забудьте импортировать стили AOS
import FeedbackForm from "../components/logistic/Form";
// import ClientSwiper from "../components/distribution/ClientSwiper";

const Logistic = () => {
  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <div>
      <Navbar />
      <div className="w-full object-cover relative">
        <div className="absolute w-1/3 flex flex-col gap-4 rounded-2xl top-1/2 left-4 bg-opacity-50 p-8 bg-black">
          <h2 className="text-4xl text-white font-bold">Логистика 3PL</h2>
          <p className="w-full ml-auto text-white text-xl leading-normal font-semibold">Услуги ответственного хранения 3pl подразумевают прием и создание условий для сохранности вверенных материальных ценностей на территории компании-исполнителя. </p>
        </div>

        <img src={PL} alt="" className="w-full object-cover max-h-screen" />
      </div>
      <div className="flex w-full justify-center items-center px-4 py-16 flex-col  bg-bg" >

        <div className="flex flex-col gap-12 justify-center lg:max-w-[80%] items-center relative">

          <div className="flex flex-col items-center justify-center gap-16">
            {/* 3PL */}

            <div className="flex w-full flex-col p-6 gap-10 bg-white border border-black rounded-2xl">
              <p className="text-3xl pb-3 font-bold text-center border-black border-b-4">
                Сотрудничество в рамках предоставляемого комплекса услуг системы 3PL включает:
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-4 w-1/2">
                  <p className="text-xl py-3 px-8  font-semibold border rounded-2xl border-black">
                    Комплекс погрузочно-разгрузочных работ под ключ
                  </p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Приемка товара с осуществлением его сортировки и складской маркировки</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Паллетирование упаковок с учетом требований по их хранению</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Организация доставки товаров оптовым покупателям или в розничную сеть</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Ведение оперативного и товарного учета с составлением первичной документации</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Кросс-докинг для перемещения ценностей с транзитного склада на место постоянного хранения</p>
                  <p className="text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Комплектация партий и заказов согласно указаниям клиента</p>

                </div>
                <div className="flex flex-col gap-8 justify-center w-[35%] mx-auto">
                  <img src={Lenta} alt="" className="rounded-3xl object-cover" />
                  <p className="font-medium"><span className="font-bold text-blue text-3xl">Пример:</span><br />
                    - <b>Лента</b> более 600 ТТ (Осуществление поставок 3PL ассортимента «ПЕКО» в Москве) </p>
                </div>

              </div>
            </div>

            <div className="w-4/5 bg-white rounded-2xl border border-black p-6 flex flex-col gap-3 pl-16 justify-center mr-auto">
              <p className="text-2xl font-bold">По запросу компании-отправителя могут быть предоставлены дополнительные услуги по</p>
              <ul className="list-disc flex flex-col ml-8 gap-1">
                <li className="text-xl font-normal">Обработке</li>
                <li className="text-xl font-normal">Упаковке и доставке товара</li>
                <li className="text-xl font-normal">Переупаковка</li>
                <li className="text-xl font-normal">Полная или частичная перестикировка</li>
                <li className="text-xl font-normal">Выбраковка</li>
                <li className="text-xl font-normal">Приемка возвратов</li>
              </ul>
              <p className="text-2xl font-semibold">Список выбранных услуг фиксируется в договоре, а их выполнение тщательно планируется для улучшения качества обслуживания и предотвращения ошибок и недочетов</p>
            </div>

            <div className="flex flex-col w-fit gap-8 ml-auto bg-white border border-black rounded-2xl p-6">
              <p className="text-2xl font-bold">Наши склады размещены в 3х городах России: </p>
              <div className="flex gap-8">
                <img className="w-2/3" src={skl} alt="" />
                <div className="flex justify-center flex-col gap-12">
                  <div className="flex items-center gap-3">
                    <img className="w-[32px]" src={loc} alt="" />
                    <p className="text-3xl font-semibold">Санкт-Петербург</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img className="w-[32px]" src={loc} alt="" />
                    <p className="text-3xl font-semibold">Москва</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img className="w-[32px]" src={loc} alt="" />
                    <p className="text-3xl font-semibold">Великий Новгород</p>
                  </div>
                </div>
              </div>

            </div>

            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistic;
