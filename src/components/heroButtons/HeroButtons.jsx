import React from 'react'
import CVButton from '../Cvbutton/CVButton'
import SocialIcons from '../social-hero-Icons/SocialIcons'

function HeroButtons() {
  return (
    <div className='button-box mt-[50px] gap-[25px] flex flex-col md:flex-row text-sky-50'>
      <CVButton/>
      <SocialIcons/>
    </div>
  )
}

export default HeroButtons
