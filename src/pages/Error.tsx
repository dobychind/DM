import { Link } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import O from "/0.png"
import Footer from "../components/footer/Footer"

const Error = () => {

  return (
    <div className="flex flex-col w-full h-screen gap-6 bg-bg">
      <Navbar logoname="DM" position="block"/>
      <div className='flex flex-col overflow-hidden my-auto items-center justify-center mx-auto px-2 pb-8 lg:px-0 w-full'>
        <div className="font-moon flex items-center text-[#EA8638] h-[450px] text-[400px]">
          4
          <img src={O} alt="" className="h-fit" />
          4
        </div>
        <p className="text-3xl font-semibold">Страница не найдена</p>
        <Link  to="/" className="text-orange text-3xl cursor-pointer">Вернуться на главную страницу</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default Error
