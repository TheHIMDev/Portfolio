import React from 'react'
import styled from "./heroImage.module.css"

function HeroImage() {
  return (
    <div className='flex justify-center mb-10'>
        <div className={`${styled.heroImageBox} text-center md:mr-16`}>
            <img src="https://i.pinimg.com/736x/51/1d/85/511d8557855a021f55d6c0a88013ea79.jpg" className='w-107 h-115' alt="" />
        </div>
    </div>
  )
}

export default HeroImage
