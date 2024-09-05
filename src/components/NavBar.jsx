import React from 'react'
import Logo from '../assets/icons/logo.svg'

function NavBar() {
  return (
    <div className=' fixed z-50  left-0 top-0 w-full flex justify-start items-center h-14 bg-white shadow-lg'>
            <img src={Logo} alt='logo' className=' pl-10 size-28' />
           
            

    </div>
  )
}

export default NavBar