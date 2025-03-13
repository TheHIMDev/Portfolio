import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import { Link, NavLink } from 'react-router';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import styled from "./header.module.css"

function Header() {

  const [isSticky, setSticky] = useState(false) ;
  const [isMenuOpen, setMenuOpen] = useState(false) ;

  useEffect(()=> {
    

    const handelScroll = () => {
      const offset = window.scrollY ;

      if(offset > 0 ) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll" , handelScroll)
    }

    
  },[])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }



  return (
    <div className={`${styled.header} pt-10 pb-5 px-0 relative z-9  text-stone-50 w-full       ${isSticky ? styled.sticky: ""}` }>
      <Container>
        <div  className='flex relative  justify-between items-center '>
          <div className=' '>

            <NavLink to="/">
              <img width="32" height="32" src="https://img.icons8.com/color-pixels/32/twitter.png" alt="twitter"/>
            </NavLink>

          </div>

          <div className={`${styled.headerMenu} w-full  ${isMenuOpen ? "absolute top-18 md:relative md:top-0 ": "hidden md:flex"}`}>
            <nav className='w-full flex flex-col items-center'>
                <ul className='flex border-2 border-theme-primary-500 md:border-none bg-stone-950 md:bg-transparent rounded-lg py-15 md:py-0 w-full border-solid flex-col justify-center items-center gap-6 md:gap-12 lg:gap-16 font-semibold md:flex-row-reverse'>
                  <li > <Link to="/"> Home </Link></li>
                  <li> <Link to="/services"> Services </Link></li> 
                  <li> <Link to="/works"> Works </Link></li> 
                  <li> <Link to="/skills"> Skills </Link></li> 
                  <li> <Link to="/contact"> Contact</Link></li>  
                </ul>
            </nav>

            
          </div>

          <div className='flex'>
                <div className='header-button flex items-center'>
                  <NavLink className={styled.HireMe}>Hire me</NavLink>
                </div>

                <div  className='ml-2 menu-icon md:hidden' onClick={toggleMenu}>
                  {isMenuOpen ? <IoCloseOutline size={55}/> : <IoMenuOutline size={55}/>}
                </div>
          </div>

          

        </div>
      </Container>
    </div>
  )
}

export default Header
