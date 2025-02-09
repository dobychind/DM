import { useState, useMemo, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import banner from '/jobhead.jpg';
import InputMask from 'react-input-mask';

interface Job {
  id: number;
  title: string;
  city: string;
  experience: string;
  description: string;
  workType: string;
  workplace: string;
}

const Job = () => {
  const jobs: Job[] = [
    { id: 1, title: "Кассир", city: "Москва", experience: "1-3", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat atque sapiente saepe minus quaerat modi recusandae temporibus enim culpa. Assumenda sed eligendi perferendis amet iste nemo alias optio eaque dolore corrupti, quam veritatis nam vel dolores repellat iusto. Illo cum doloremque saepe ad soluta corrupti libero repellat iure odio, explicabo quis quibusdam neque excepturi quos, aspernatur voluptatibus quam quia fugiat labore suscipit. Ut nisi assumenda vero harum accusamus labore fugit dolorem sapiente, illo, quis natus expedita, a aperiam saepe commodi praesentium possimus suscipit minus! Magnam nesciunt consequatur dignissimos suscipit fuga. Tenetur quae veritatis eveniet fugit vero delectus facere quos perspiciatis!", workType: "Кассир", workplace: "Офис" },
    { id: 2, title: "Механик", city: "Санкт-Петербург", experience: "3+", description: "Node.js, Databases", workType: "Механик", workplace: "Гараж" },
    { id: 3, title: "Водитель", city: "Великий Новгород", experience: "0", description: "Figma, UI/UX", workType: "Водитель", workplace: "Склад" },
    { id: 4, title: "Пекарь", city: "Москва", experience: "1-3", description: "React, TypeScript", workType: "Пекарь", workplace: "Офис" },
    { id: 5, title: "Водитель", city: "Санкт-Петербург", experience: "3+", description: "Node.js, Databases", workType: "Водитель", workplace: "Склад" },
    { id: 6, title: "Пекарь", city: "Великий Новгород", experience: "3+", description: "Figma, UI/UX", workType: "Пекарь", workplace: "Офис" },
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedWorkType, setSelectedWorkType] = useState<string[]>([]);
  const [selectedWorkplace, setSelectedWorkplace] = useState<string[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [job, setJob] = useState('');
  const [city, setCity] = useState('');



  const toggleFilter = (_filter: string, setFilter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchText === "" || job.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCity =
        selectedCity.length === 0 || selectedCity.includes(job.city);
      const matchesExperience =
        selectedExperience.length === 0 || selectedExperience.includes(job.experience);
      const matchesWorkType =
        selectedWorkType.length === 0 || selectedWorkType.includes(job.workType);
      const matchesWorkplace =
        selectedWorkplace.length === 0 || selectedWorkplace.includes(job.workplace);

      return matchesSearch && matchesCity && matchesExperience && matchesWorkType && matchesWorkplace;
    });
  }, [searchText, selectedCity, selectedExperience, selectedWorkType, selectedWorkplace, jobs]);

  const handleOpenPopup = (job: any) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setSelectedJob(null);
    setIsPopupOpen(false);
  };

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener('keydown', handleEscKey);
    } else {
      document.removeEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isPopupOpen]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/jB7EDl9oajz", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, country, phone, date, job, city })
    })
      .then(response => response.json())
      .then(response => {
        if (response.code === 200) {
          alert("Мы получили ваш ответ, в скором времени свяжемся с вами!");
        }
      })
  }

  const uniqueCities = Array.from(new Set(jobs.map((job) => job.city)));
  const uniqueExperiences = Array.from(new Set(jobs.map((job) => job.experience)));
  const uniqueWorkTypes = Array.from(new Set(jobs.map((job) => job.workType)));
  const uniqueWorkplaces = Array.from(new Set(jobs.map((job) => job.workplace)));

  return (
    <div className="w-full font-body relative bg-bg flex flex-col gap-4">
      <Navbar logoname="DM" color="text-white" position="fixed" />
      <img src={banner} className="h-[400px] object-cover rounded-b-[56px] rounded-br-[56px]" alt="Баннер страницы контактов" />
      <div className="w-full top-36 absolute">
        <h2 className="text-6xl w-full text-center text-white mx-auto font-title font-medium">Вакансии</h2>
      </div>

      <div className="flex p-4 px-8 w-full h-full justify-between gap-12">
        <div className="bg-white flex flex-col w-full gap-2 p-4 rounded-xl justify-between">
          <div className="flex w-full h-full justify-start flex-col gap-8">
            <p className="w-full text-lg text-justify">Мы - успешная компания, занимающаяся дистрибуцией хлеба, и уже 12 лет остаемся лидерами на рынке.
              Мы смогли успешно развиться в трех направлениях бизнеса: Дистрибуция ХБИ, Хлебопекарное производство и Логистика по системе 3PL.
              Наша миссия - обеспечить клиентов качественной продукцией и безупречным сервисом.</p>
            <p className="w-full text-lg text-justify">Наша миссия — обеспечить клиентов качественной продукцией и безупречным обслуживанием,
              и <b> мы ищем талантливых и целеустремленных людей, которые хотят расти и развиваться вместе с нами </b> в Москве, Санкт-Петербурге и Великом Новгороде!</p>
            <p className="w-full text-lg text-justify"><b>Если вы готовы стать частью нашей команды и внести вклад в успех компании, добро пожаловать!</b></p>
          </div>

        </div>
        <div className=" bg-main rounded-2xl p-4 px-6 flex flex-col justify-around w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-white text-2xl font-normal">Уважаемый кандидат!</p>
            <p className="text-white text-lg font-medium">Для уточнения актуальности вакансий вы можете связаться с нами по следующим телефонам: <br />
              <a href="tel:+7 (812) 622-12-46 (доб.117)">+7 (812) 622-12-46 (доб.117)</a>;
              <br /><a href="tel:+7 (931) 381-71-10">+7 (931) 381-71-10</a>
              <br />или написать на почту:
              <a className="font-semibold " href="mailto:jobs@thdm.ru">jobs@thdm.ru</a>
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-lg font-medium">Если не нашлась подходящая вакансия, то можете заполнить форму ниже</p>
            <button className="px-5 py-3 bg-white w-fit text-main text-base rounded-xl hover:bg-main hover:text-white transition-colors"
              onClick={() => handleOpenPopup(job)}
            >
              Заполнить форму
            </button>
          </div>

          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-xl p-8 w-[90%] md:w-[50%]">
                <h3 className="text-2xl font-semibold mb-4" >Заполните форму</h3>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <input
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    placeholder="ФИО"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    placeholder="Дата рождения"
                    type="date"
                    id="name"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                  <InputMask
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    placeholder="Телефон"
                    id="phone"
                    mask="+7(999)-999-99-99"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <input
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    placeholder="Гражданство"
                    type="text"
                    id="nationality"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Вакансия"
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    onChange={(e) => setJob(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Город трудоустройства"
                    className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  <div className="flex gap-2 justify-between items-center">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" required /> Согласен с обработкой<a href="/policy.pdf" download>персональных данных</a>
                    </label>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-main text-white rounded-md"
                    >
                      Отправить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex bg-bg h-full justify-center min-h-[69vh] flex-col md:flex-row w-full gap-4 px-2 md:px-8">
        {/* Фильтры */}
        <div className="flex h-fit p-4 rounded-2xl bg-white flex-col gap-6 w-full md:w-1/4 shadow-lg">
          <h3 className="text-2xl font-semibold">Фильтры</h3>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-xl">Города</h4>
            {uniqueCities.map((city) => (
              <label key={city} className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  checked={selectedCity.includes(city)}
                  onChange={() => toggleFilter('city', setSelectedCity, city)}
                  className="w-6 h-6 rounded accent-main text-white focus:ring-2 focus:ring-main" />
                {city}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-xl">Опыт</h4>
            {uniqueExperiences.map((experience) => (
              <label key={experience} className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  checked={selectedExperience.includes(experience)}
                  onChange={() => toggleFilter('experience', setSelectedExperience, experience)}
                  className="w-6 h-6 rounded accent-main text-white focus:ring-2 focus:ring-main" />
                {experience} года
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-xl">Тип вакансии</h4>
            {uniqueWorkTypes.map((workType) => (
              <label key={workType} className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  checked={selectedWorkType.includes(workType)}
                  onChange={() => toggleFilter('workType', setSelectedWorkType, workType)}
                  className="w-6 h-6 rounded accent-main text-white focus:ring-2 focus:ring-main" />
                {workType}
              </label>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-medium text-xl">Место работы</h4>
            {uniqueWorkplaces.map((workplace) => (
              <label key={workplace} className="flex items-center gap-2 text-lg">
                <input
                  type="checkbox"
                  checked={selectedWorkplace.includes(workplace)}
                  onChange={() => toggleFilter('workplace', setSelectedWorkplace, workplace)}
                  className="w-6 h-6 rounded accent-main text-white focus:ring-2 focus:ring-main"
                />
                {workplace}
              </label>
            ))}
          </div>
        </div>


        {/* Список вакансий */}
        <div className="flex flex-col gap-6 w-full ml-auto">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Поиск вакансии"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              className="px-6 py-3 bg-main text-white rounded-lg hover:bg-blue-700"
              onClick={() => setSearchText("")}
            >
              Очистить
            </button>
          </div>

          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="px-8 flex flex-col gap-4 py-6 border border-gray-300 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex flex-wrap justify-between text-sm text-gray-500">
                  <h3 className="text-2xl font-bold text-gray-800">{job.title}</h3>
                  <span className="text-base">Город: {job.city}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-lg">Опыт: {job.experience} года</span>
                  <p className="text-gray-700 text-base leading-6">{job.description}</p>
                  <span className="text-base">Тип Вакансии: {job.workType}</span>
                  <span className="text-base">Месть работы: {job.workplace}</span>
                </div>

                <button className="px-5 py-3 bg-main w-fit text-white text-base rounded-xl hover:bg-main transition-colors"
                  onClick={() => handleOpenPopup(job)}
                >
                  Подробнее
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">Вакансии не найдены</p>
          )}

        </div>
      </div>
      {isPopupOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 w-[90%] md:w-[50%]">
            <h3 className="text-2xl font-semibold mb-4" >Заполните форму</h3>
            <form className="flex flex-col gap-4" onSubmit={onSubmit}>
              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="ФИО"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Дата рождения"
                type="date"
                id="name"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <InputMask
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Телефон"
                id="phone"
                mask="+7(999)-999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                placeholder="Гражданство"
                type="text"
                id="nationality"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
              <input
                type="text"
                value={selectedJob.title}
                placeholder="Вакансия"
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                onChange={(e) => setJob(e.target.value)}
                required
              />
              <input
                type="text"
                value={selectedJob.city}
                placeholder="Город трудоустройства"
                className="px-3 py-2 text-black font-medium text-lg rounded-2xl border-black border"
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <div className="flex gap-2 justify-between items-center">
                <label className="flex items-center gap-2">
                  <input type="checkbox" required /> Согласен с обработкой<a href="/policy.pdf" download>персональных данных</a>
                </label>
                <button
                  type="submit"
                  className="px-4 py-2 bg-main text-white rounded-md"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Job;
