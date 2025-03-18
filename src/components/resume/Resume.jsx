import React from 'react'
import Container from '../container/container'
import { PiGraduationCap } from 'react-icons/pi'
import ResumeItem from '../resumeItems/ResumeItem'
import styled from "./resume.module.css"
import { CiMedal } from 'react-icons/ci'
import ResumeBox from '../resumeBox/ResumeBox'

function Resume() {
  return (
    <section className={`${styled.resumeSection} mt-20`}>
      <Container>
        <div className='grid grid-cols-1 lg:flex lg:justify-evenly  text-sky-50 w-full gap-20 '>
            <ResumeBox title={"My Experience"} icon={<PiGraduationCap size={45}/>}>
                <ResumeItem time={"2024 -  Present"} title={"Knowledge Acquisition "} institue={"More Than 300 hours"}/>
                <ResumeItem time={"2024 -  Present"} title={"Technical Exploration"} institue={"More Than 400 hours"}/>
            </ResumeBox>

            <ResumeBox title={"My Education"} icon={<CiMedal size={45} />}>
                <ResumeItem time={"2018 - 2021"} title={"Software Technology Engineering"} institue={""}/>
                <ResumeItem time={"2016 - 2018"} title={"Associate Degree in Computer Software"} institue={""}/>
            </ResumeBox>
        </div>

      </Container>
    </section>
  )
}

export default Resume
