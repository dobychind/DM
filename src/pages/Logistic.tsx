import Aos from "aos";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import PL from '/3plbanner.jpg';
import loc from '/location.png';
import skl from '/skl.jpg';
import del from '/dellog.png';
import Lenta from '/lenta.jpg';
import 'aos/dist/aos.css'; // Не забудьте импортировать стили AOS
import FeedbackForm from "../components/logistic/Form";
// import ClientSwiper from "../components/distribution/ClientSwiper";

const Logistic = () => {
  useEffect(() => {
    Aos.init();
  }, []);



  return (
    <div className="font-body">
      <Navbar position="fixed"/>
      <div className="w-full object-cover relative">
        <div className="absolute w-full md:w-1/3 flex flex-col pt-10 gap-2 md:gap-4 md:rounded-2xl md:top-1/2 md:left-4 bg-opacity-50 p-8 bg-black">
          <h2 className="text-xl pt-8 md:text-4xl text-white font-bold">Логистика 3PL</h2>
          <p className="w-full ml-auto text-white text-m md:text-xl leading-normal font-semibold">Услуги ответственного хранения 3pl подразумевают прием и создание условий для сохранности вверенных материальных ценностей на территории компании-исполнителя. </p>
        </div>

        <img src={PL} alt="Фон 3PL" className="w-full md md:object-cover max-h-screen" />
      </div>
      <div className="flex w-full justify-center items-center px-4 py-16 flex-col  bg-bg" >

        <div className="flex flex-col gap-12 justify-center lg:max-w-[80%] items-center relative">

          <div className="flex flex-col items-center justify-center gap-16">
            {/* 3PL */}

            <div className="flex w-full flex-col p-6 gap-10 bg-white border border-black rounded-2xl">
              <p className="text-2xl md:text-3xl pb-3 font-bold border-black border-b-4">
                Сотрудничество в рамках предоставляемого комплекса услуг системы 3PL включает:
              </p>
              <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                  <p className="text-lg md:text-xl py-3 px-8  font-semibold border rounded-2xl border-black">
                    Комплекс погрузочно-разгрузочных работ <span className="text-main">под ключ</span> 
                  </p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main">Приемка товара</span> с осуществлением его сортировки и складской маркировки</p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main">Паллетирование упаковок</span> с учетом требований по их хранению</p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main">Организация доставки</span> товаров оптовым покупателям или в розничную сеть</p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black ">Ведение оперативного и товарного <span className="text-main">учета</span> с составлением первичной документации</p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main">Кросс-докинг</span> для перемещения ценностей с транзитного склада на место постоянного хранения</p>
                  <p className="text-lg md:text-xl py-3 px-8 font-semibold border rounded-2xl border-black "><span className="text-main">Комплектация</span> партий и заказов согласно указаниям клиента</p>

                </div>
                <div className="flex flex-col gap-8 justify-center w-full md:w-[35%] mx-auto">
                  <img src={Lenta} alt="Магазин Лента" className="rounded-3xl object-cover" />
                  <p className="font-medium"><span className="font-bold text-blue text-3xl">Пример:</span><br />
                    - <b>Лента</b> более 600 ТТ (Осуществление поставок 3PL ассортимента «ПЕКО» в Москве) </p>
                </div>

              </div>
            </div>

            <div className="w-full md:w-4/5 bg-white rounded-2xl border border-black p-6 flex flex-col gap-3 md:pl-16 justify-center mr-auto">
              <p className="text-2xl font-bold">По запросу компании-отправителя могут быть предоставлены <span className="text-main">дополнительные услуги</span> по</p>
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
              <p className="text-4xl font-bold">Наши <span className="text-main">склады</span> размещены в 3х городах России: </p>
              <div className="flex flex-col md:flex-row gap-8">
                <img className="w-full md:w-2/3" src={skl} alt="Склад" />
                <div className="flex justify-center flex-col gap-6 md:gap-12">
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
                </div>
              </div>

            </div>

            <div className='w-full flex flex-col md:flex-row justify-center gap-8 items-center'>
                <p className='font-normal md:w-2/3'>Стоимость услуг оператора для каждого типа логистики рассчитывается индивидуально. 
                    <br />Для расчета обратитесь к менеджерам компании, заполнив форму или позвонив по телефону, указанному на сайте.</p>
                <FeedbackForm text="Консультация с логистом"/>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistic;
