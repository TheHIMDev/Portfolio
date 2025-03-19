import React from 'react'
import Container from '../container/container'
import SectionHeader from "../sectionHeader/SectionHeader.jsx"
import ClientsStoryItem from '../clientsStoryItem/ClientsStoryItem.jsx'
import styled from "./clientsStory.module.css"

function ClientsStory() {
  return (
    <div className={`${styled.testimonialSection} mt-20 `}>
        
        <Container>
            <SectionHeader title={"Fake Clients Stories"} description={"Empowering people in a new digital journey with my super services"}></SectionHeader>
            <div className={`testimonial-widget grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-6  text-sky-50`}>
                <ClientsStoryItem clientName={"Ethan Hall"}  clientDetails={"SEO Specialist, Theme Junction"} logoSrc={"https://img.icons8.com/color/50/zalo.png"} imageSrc={"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"} />
                <ClientsStoryItem clientName={"Aurora Thompson"} clientDetails={"Software Engineer "} logoSrc={"https://img.icons8.com/color/50/keybase2.png"} imageSrc={"https://images.unsplash.com/photo-1536896407451-6e3dd976edd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBvcnRyYWl0fGVufDB8fDB8fHww"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"}   />
                <ClientsStoryItem clientName={"Gabriel Singh"} clientDetails={"Web Analyst"} logoSrc={"https://img.icons8.com/fluency/100/icue.png"} imageSrc={"https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"}  />
                <ClientsStoryItem clientName={"Oliver Jensen"} clientDetails={"Digital Marketing Specialist"} logoSrc={"https://img.icons8.com/doodle/48/swiftui.png"} imageSrc={"https://images.unsplash.com/photo-1587397845856-e6cf49176c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHBvcnRyYWl0fGVufDB8fDB8fHww"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"}   />
                <ClientsStoryItem clientName={"Sophia Patel"} clientDetails={"Webmaster"} logoSrc={"https://img.icons8.com/color/50/discord-logo.png"} imageSrc={"https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"}    />
                <ClientsStoryItem clientName={"Benjamin Santos"} clientDetails={"Cloud Computing Specialist"} logoSrc={"https://img.icons8.com/fluency/100/insidea.png"} imageSrc={"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"} qoute={"“ HIM is a professional Developer he really helps my business by providing value to my business. ”"}    />
            </div>
        </Container>
    </div>
  )
}

export default ClientsStory
