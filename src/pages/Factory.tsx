import { Link } from 'react-router-dom'
import Button from '../components/button/Button'
import Dates from '../components/factory/Dates'
import Navbar from '../components/navbar/Navbar'

import hpp from '/HppLogo.png'
import Banner from '/banner.jpg'
import BreadShop from '/breadshop.jpg'



const Factory = () => {

  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='flex font-body flex-col gap-8 justify-center items-center mb-12'>
      <Navbar position='block' />

      <div className='w-full relative'>
        <img src={Banner} alt="banner hpp1" className='' />
        <img src={hpp} alt="Hpp Logotype" className='absolute w-16 top-1 right-1 md:top-4 md:right-4 md:w-48' />
        <h2 className='text-amber-900 font-semibold md:font-medium text-lg md:text-5xl top-14 absolute right-5 md:top-56 md:right-36 max-w-[48%]'>Хлебопекарное предприятие № 1</h2>
        <p className='text-main w-[96%] text-center md:w-auto md:text-start pt-6 md:py-6 md:pt-0 font-normal md:text-3xl md:absolute md:top-[22rem] md:right-32 md:max-w-[40%]'>Ключевой производитель хлеба и хлебобулочных изделий в составе группы компаний «Даниэль М».</p>

        <div className='mt-4 flex justify-center md:mt-0 md:absolute md:bottom-16 md:right-16'>
          <Link to="/production/bread"><Button onClick={handleClick} color='main' text='Продукция' /></Link>
        </div>
      </div>

      <div className='w-[96%] flex flex-col justify-center gap-12 md:w-[86%]'>
        <h3 className='text-xl md:text-4xl font-semibold md:font-bold md:py-16'>Этапы развития собственного производства</h3>
        <Dates />
      </div>

      <div className='flex flex-col gap-8 w-[96%] md:w-[80%] mt-12 px-4 py-3 md:px-12 md:py-8 rounded-2xl shadow-2xl'>
        <h3 className='text-xl font-semibold md:text-3xl md:font-bold'>Наши изделия заслуженно занимают места на полках ведущих федеральных и региональных торговых сетей</h3>
        <img className='w-full h-[420px] object-cover rounded-2xl' src={BreadShop} alt="Хлебный отдел в магазине" />
      </div>
    </div>
  )
}

export default Factory