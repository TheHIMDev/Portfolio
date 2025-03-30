import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import SectionHeader from "../sectionHeader/SectionHeader.jsx"
import ClientsStoryItem from '../clientsStoryItem/ClientsStoryItem.jsx'
import styled from "./clientsStory.module.css"
import { getClientsStoryItem } from '../../services/api.js'

function ClientsStory() {
  const [items , setItems] = useState([])

  useEffect(() => {
    getClientsStoryItem().then(res => setItems(res))
  },[])
  return (
    <div className={`${styled.testimonialSection} mt-20 `}>
        
        <Container>
            <SectionHeader title={"Clients Stories"} description={"Empowering people in a new digital journey with my super services"}></SectionHeader>
            <div className={`testimonial-widget grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6  text-sky-50`}>
              {
                  items.map((item) =>(
                    <ClientsStoryItem key={item.id} clientName={item.clientName} clientDetails={item.clientDetails} imageAlt={item.imageAlt} logoAlt={item.logoAlt} imageSrc={item.imageSrc} logoSrc={item.logoSrc} qoute={item.qoute} />
                  ))
              }
            </div>
        </Container>
    </div>
  )
}

export default ClientsStory
