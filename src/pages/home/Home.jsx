import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/services/Services'
import MySkills from '../../components/MySkills/MySkills'
import Resume from '../../components/resume/resume'
import ClientsStory from '../../components/clientsStory/ClientsStory'

function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <MySkills/>
      <Resume/>
      <ClientsStory/>
    </div>
  )
}

export default Home
