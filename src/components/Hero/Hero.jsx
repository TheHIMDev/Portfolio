import React from 'react'
import Container from '../container/container'
import FunFactArea from '../funFactArea/FunFactArea';
import HiSvg from '../HiSVG/HiSvg';
import HeroContentBox from '../HeroContentBox/HeroContentBox';
import HeroImage from '../heroImage/HeroImage';
import styled from "./hero.module.css"

function Hero() {
  return (
    <div>
      
        <section className={`${styled.herosection} min-h-screen`} >
            <Container>
                <HiSvg/>

                <div className='content flex flex-col md:flex-row-reverse md:justify-between  '>
                    {/* hero image */}
                    <HeroImage/>
                    
                    {/* hero content about {im him , front end and }*/}
                    <HeroContentBox/>
                    
                </div>
                {/* funfacts is about number show in project about how many years and project and ... we work on*/}
                <FunFactArea/>
                


            </Container>
        </section>
      
    </div>
  )
}

export default Hero
