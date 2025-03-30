import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import { Link } from 'react-router'
import styled from "./footer.module.css"
import { getLinks } from '../../services/api'

function Footer() {
  const [links, setLinks] = useState([])

  useEffect(()=> {
    getLinks().then((res) => setLinks(res))
  },[])
  return (
    <div className={`${styled.footerArea} py-10`}>
        <Container>
          <div className='flex justify-between text-sky-50'>
            <div className={`log-box flex items-center w-70`}>
              <img src="https://img.icons8.com/color-pixels/32/twitter.png" alt="" />
            </div>

            <div className={`footer-menu w-120`}>
              <ul className={`grid sm:grid-cols-2 gap-5 `}>
                  {links.map((link) =>(
                    <li key={link.id} > <Link to={link.link}> {link.text} </Link></li>
                  ))}
              </ul>
            </div>

            <div className={`copy-text text-theme-primary-500 font-semibold flex items-center`}>
              <p>&copy; 2025 All rights reserved by Him</p>
            </div>
          </div>
           
        </Container>
      
    </div>
)}

export default Footer
