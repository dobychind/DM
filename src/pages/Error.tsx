import { Link } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import O from "/0.png"

const Error = () => {
  return (
    <div className="flex flex-col h-screen gap-6 bg-bg">
      <Navbar />
      <div className='flex flex-col overflow-hidden  items-center justify-center mx-auto px-2 pb-8 lg:px-0 lg:w-[90%]'>
        <div className="font-moon flex items-center text-[#EA8638] h-[460px] text-[400px]">
          4
          <img src={O} alt="" className="h-fit" />
          4
        </div>
        <p className="text-3xl font-semibold">Страница не найдена</p>
        <Link to="/" className="text-orange text-3xl cursor-pointer">Вернуться на главную страницу</Link>
      </div>
    </div>
  )
}

export default Error
