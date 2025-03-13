import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoGithub } from 'react-icons/io5'
import { LiaTelegram } from 'react-icons/lia'
import { PiXLogoBold } from 'react-icons/pi'
import SocialHeroIcon from '../social-hero-icon/SocialHeroIcon'
import styled from "./socialIcons.module.css"

function SocialIcons() {
  return (
    <ul className={`ul-reset ${styled.socialIcons} flex justify-around  md:flex-row lg items-center  gap-5 md:gap-2 lg:gap-5`}>
      <SocialHeroIcon URL="/"><PiXLogoBold/></SocialHeroIcon>    
      <SocialHeroIcon URL="/"><IoLogoGithub/></SocialHeroIcon>
      <SocialHeroIcon URL="/"><FaLinkedinIn /></SocialHeroIcon>
      <SocialHeroIcon URL="/"><LiaTelegram /></SocialHeroIcon>    
    </ul>
  )
}

export default SocialIcons
