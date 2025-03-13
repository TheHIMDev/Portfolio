import React from 'react'
import HeroButtons from '../heroButtons/HeroButtons'
import styled from "./heroContentBox.module.css"

function HeroContentBox() {
  return (
    <div className='hero-content-box'>
        <span className={`${styled.heroSubTitle} text-sky-50`}>I'm HIM</span>
        <h1 className={`${styled.heroTitle} font-bold `}>
            Front-End <br></br> Developer
        </h1>              

        <p className={`${styled.lead} text-sky-50  font-semibold text-xl`}>
        I break down complex problems into manageable parts and solve them , providing a high-quality product.
        </p>

        <HeroButtons/>
    </div>
  )
}

export default HeroContentBox
