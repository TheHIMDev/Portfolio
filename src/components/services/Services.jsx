import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import styled from "./services.module.css"
import ServicesItem from '../servicesItem/servicesItem'
import SectionHeader from '../sectionHeader/SectionHeader'
import { getServicesItems } from '../../services/api'

function Services() {
  const [items , setItems] = useState([])

  useEffect(() =>{
    getServicesItems().then(res => setItems(res))
  },[])

  return (
    <section className={`${styled.serviceSection} my-30 text-sky-50`}>
        <Container>
            <SectionHeader title="My Quality Services" description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers "/>

            <div className={`${styled.servicesWidget} relative`}>
              {
                items.map((item) => (
                  <ServicesItem key={item.id} number={item.number} title={item.title} content={item.content}/>
                ))
              }

            </div>
        </Container>
      
    </section>
  )
}

export default Services
