import VacanciesWidget from "../components/jobsComponent/VacancyWidget"
import Navbar from "../components/navbar/Navbar"

const Job = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Navbar logoname="DM" position="block" />
      <div className="flex flex-col w-full gap-8 justify-center items-center">
        <h2 className="text-5xl font-bold">Вакансии</h2>
        <VacanciesWidget />
      </div>
    </div>
  )
}

export default Job