import React from 'react'
import Container from '../container/container'
import styled from "./services.module.css"
import ServicesItem from '../servicesItem/servicesItem'
import SectionHeader from '../sectionHeader/SectionHeader'

function Services() {
  return (
    <section className={`${styled.serviceSection} my-30 text-sky-50`}>
        <Container>
            <SectionHeader title="My Quality Services" description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers "></SectionHeader>

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
