import React from 'react'
import Banner from './notification-banner/banner'
import Navbar from './navbar/navbar'
import Button from '../button/button'

const Header = () => {
  return (
    <header className=''>
        <Banner title={"Navigate your ideal career path with tailored expert advice "}/>
        <Navbar/>
    </header>
  )
}

export default Header