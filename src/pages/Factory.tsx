import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Navigation from '../components/nav/Navigation'

const Factory = () => {
  return (
    <div>
        <Navbar position='block'/>
        <Navigation/>
    </div>
  )
}

export default Factory