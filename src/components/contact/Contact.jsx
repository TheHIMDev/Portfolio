import React from 'react'
import Container from "../container/container"
import SectionHeader from '../sectionHeader/SectionHeader'
import styled from "./contact.module.css"
import ContactForm from '../contactForm/ContactForm'

function Contact() {
  return (
    <section className={`${styled.contactSection} text-sky-50` }>
        <Container>
            <div className="flex justify-center ">
                <div className={`w-200 `}>
                    <SectionHeader title={"Let’s work together!"} description={"I design and code beautifully simple things and I love what I do. Just simple like that!"}/>
                    
                    <ContactForm/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Contact
