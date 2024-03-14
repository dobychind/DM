import React from 'react'
import Logo from '/DmLogo.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-3 font-main'>
      <div>
        <img src={Logo}  alt="Logo" className='h-[70px]'/>
      </div>
      <div className='flex gap-5'>
        <a href="#"><p className='text-main text-2xl font-semibold'>Главная</p></a>
        <a href="#"><p className='text-main text-2xl font-semibold'>О компании</p></a>
        <a href="#"><p className='text-main text-2xl font-semibold'>Производство</p></a>
        <a href="#"><p className='text-main text-2xl font-semibold'>Дистрибьюция</p></a>
        <a href="#"><p className='text-main text-2xl font-semibold'>Логистика</p></a>
        <a href="#"><p className='text-main text-2xl font-semibold'>Прочее</p></a>
      </div>
    </div>
  )
}

export default Header
