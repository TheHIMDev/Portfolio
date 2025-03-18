import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/services/Services'
import MySkills from '../../components/MySkills/MySkills'
import Resume from '../../components/resume/resume'

function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <MySkills/>
      <Resume/>
    </div>
  )
}

export default Home
