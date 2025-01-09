import { useState, useMemo } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface Job {
  id: number;
  title: string;
  city: string;
  experience: string;
  description: string;
}

const Job = () => {
  const jobs: Job[] = [
    { id: 1, title: "Вакансия 1", city: "Москва", experience: "1-3", description: "React, TypeScript" },
    { id: 2, title: "Вакансия 2", city: "Санкт-Петербург", experience: "3+", description: "Node.js, Databases" },
    { id: 3, title: "Вакансия 3", city: "Великий Новгород", experience: "0", description: "Figma, UI/UX" },
    { id: 4, title: "Вакансия 4", city: "Москва", experience: "1-3", description: "React, TypeScript" },
    { id: 5, title: "Вакансия 5", city: "Санкт-Петербург", experience: "3+", description: "Node.js, Databases" },
    { id: 6, title: "Вакансия 6", city: "Великий Новгород", experience: "0", description: "Figma, UI/UX" },
  ];

  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchText === "" || job.title.toLowerCase().includes(searchText.toLowerCase());
      const matchesCity =
        selectedCity === "" || job.city === selectedCity;
      const matchesExperience =
        selectedExperience === "" || job.experience === selectedExperience;

      return matchesSearch && matchesCity && matchesExperience;
    });
  }, [searchText, selectedCity, selectedExperience, jobs]);

  return (
    <div className="w-full font-body bg-bg flex flex-col gap-4">
      <Navbar logoname="DM" color="text-white" position="block" />
      <div className="flex bg-bg h-full min-h-[69vh] flex-col w-full gap-8 justify-center items-center px-2 md:px-0">
        <h2 className="text-6xl font-title font-medium">Вакансии</h2>

        {/* Поиск */}
        <div className="w-full max-w-4xl flex items-center gap-4">
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

        {/* Фильтры */}
        <div className="flex w-full max-w-4xl flex-wrap gap-4 justify-start">
          <select
            className="p-3 border border-gray-300 rounded-lg"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Все города</option>
            <option value="Москва">Москва</option>
            <option value="Великий Новгород">Великий Новгород</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
          <select
            className="p-3 border border-gray-300 rounded-lg"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
          >
            <option value="">Любой опыт</option>
            <option value="0">до года</option>
            <option value="1-3">1-3 года</option>
            <option value="3+">более 3-х лет</option>
          </select>
        </div>

        {/* Список вакансий */}
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="px-6 flex flex-col gap-3 py-4 border border-gray-200 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex flex-wrap justify-between text-sm text-gray-500">
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>

                  <span>Город: {job.city}</span>
                </div>
                <span>Опыт: {job.experience} года</span>

                <p className="text-gray-700 ">{job.description}</p>
                <button className="px-4 w-fit bg-main py-2 bg-blue-600 text-white text-sm rounded-2xl hover:bg-blue-700 transition-colors">
                  Подробнее
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Вакансии не найдены</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Job;
