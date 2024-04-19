import { Link } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"

const Error = () => {
  return (
    <div className="flex flex-col gap-6 bg-bg">
      <Navbar/>
      <div className='flex flex-col overflow-hidden  items-center gap-8 justify-center mx-auto px-4 lg:px-0 lg:w-[90%]'>
        <Link to="/">Home</Link>

      </div>
    </div>
  )
}

export default Error
