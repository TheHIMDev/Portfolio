import React, { useEffect, useState } from 'react'
import styled from "./heroImage.module.css"
import { getHeroImg } from '../../services/api'



function HeroImage() {
  const [image , setImage] = useState({});
  
  useEffect(() => {
    getHeroImg().then((res)=> setImage(res))
  },[])
  return (
    <div className='flex justify-center mb-10'>
        <div className={`${styled.heroImageBox} text-center lg:mr-16`}>
          
          {
            <img src={image.src} className='w-100 h-115' alt="" />
          }
          
        </div>
    </div>
  )
}

export default HeroImage
