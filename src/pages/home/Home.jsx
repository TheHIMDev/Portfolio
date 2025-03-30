import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/services/Services'
import MySkills from '../../components/MySkills/MySkills'
import Resume from '../../components/resume/resume'
import ClientsStory from '../../components/clientsStory/ClientsStory'
import Blog from '../../components/blog/blog'
import Contact from '../../components/contact/Contact'

function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <MySkills/>
      <Resume/>
      <ClientsStory/>
      <Blog/>
      <Contact/>
    </>
  )
}

export default Home
