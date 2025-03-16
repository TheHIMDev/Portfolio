import React from 'react'
import Container from '../container/container'
import SectionHeader from '../sectionHeader/SectionHeader'
import styled from "./mySkills.module.css"
import Skill from '../skill/Skill'

function MySkills() {
  return (
    <section className={styled.skillsSection}>
        <Container>
            <SectionHeader title="MY Skills" description="We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers"/>

            <div className={`${styled.skillsWidget} grid gap-5 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 lg:gap-7  `}>
                
                <Skill skillName={"Git"} number={"97%"} alt={"react"} src={"https://img.icons8.com/external-those-icons-lineal-color-those-icons/100/external-Git-social-media-those-icons-lineal-color-those-icons.png"} />
                <Skill skillName={"Tailwind"} number={"82%"} alt={"react"} src={"https://img.icons8.com/fluency/100/tailwind_css.png"} />
                <Skill skillName={"Redux"} number={"86%"} alt={"redux"} src={"https://img.icons8.com/external-tal-revivo-green-tal-revivo/100/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-green-tal-revivo.png"} />
                <Skill skillName={"TypeScript"} number={"74%"} alt={"react"} src={"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo.png"} />
                <Skill skillName={"React"} number={"95%"} alt={"react"} src={"https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"} />
                <Skill skillName={"JS"} number={"89%"} alt={"JS"} src={"https://img.icons8.com/color/100/javascript.png"} />
            </div>
        </Container>
      
    </section>
  )
}

export default MySkills
