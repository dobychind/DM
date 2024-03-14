import React from 'react'
import Logo from '/DmLogo.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center font-main'>
      <div>
        <img src={Logo}  alt="Logo" className='h-[70px]'/>
      </div>
      <div className='flex gap-3'>
        <p className='text-main'>Главная</p>
      </div>
    </div>
  )
}

export default Header
