import React from 'react'
import Container from '../container/container'
import styled from "./services.module.css"
import ServicesItem from '../servicesItem/servicesItem'

function Services() {
  return (
    <section className={`${styled.serviceSection} my-30 text-sky-50`}>
        <Container>
            <div className={`${styled.sectionHeader} flex justify-center flex-col mb-15 items-center text`}>
                <h2 className={`${styled.sectionTitle} font-bold mb-10`} > My Quality Services</h2>
                <p className='font-semibold max-w-[800px] text-center'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers</p>
            </div>

            <div className={`${styled.servicesWidget} relative`}>
                <ServicesItem number={"1"} title={"Responsive design"} content={"I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"}/>
                <ServicesItem number={"2"} title={"Performance Optimization"} content={"I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"}/>
                <ServicesItem number={"3"} title={"Browser Compatibility"} content={"I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"}/>
                <ServicesItem number={"4"} title={"UI/UX"} content={"I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people"}/>

            </div>
        </Container>
      
    </section>
  )
}

export default Services
