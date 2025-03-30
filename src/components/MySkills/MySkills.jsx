import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import SectionHeader from '../sectionHeader/SectionHeader'
import styled from "./mySkills.module.css"
import Skill from '../skill/Skill'
import { getMySkillsItems } from '../../services/api'

function MySkills() {

  const [items , setItems] = useState([])

  useEffect(()=> {
    getMySkillsItems().then(res => setItems(res) )
  },[])

  return (
    <section className={styled.skillsSection}>
        <Container>
            <SectionHeader title="MY Skills" description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers"/>

            <div className={`${styled.skillsWidget} grid gap-5 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 lg:gap-7  `}>
              {
                items.map((item) => (
                  <Skill skillName={item.skillName} alt={item.alt} number={item.number} src={item.src} key={item.id}/>
                ))
              }
                
              
            </div>
        </Container>
      
    </section>
  )
}

export default MySkills
