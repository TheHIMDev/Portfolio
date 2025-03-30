import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import { PiGraduationCap } from 'react-icons/pi'
import ResumeItem from '../resumeItems/ResumeItem'
import styled from "./resume.module.css"
import { CiMedal } from 'react-icons/ci'
import ResumeBox from '../resumeBox/ResumeBox'
import { getResumeEducation, getResumeExperience } from '../../services/api'

function Resume() {

  const [ExperienceItems , setExperienceItems] = useState([]);
  const [EducationItems , setEducationItems] = useState([]);

  useEffect(() => {
    getResumeExperience().then(res => setExperienceItems(res))
    getResumeEducation().then(res => setEducationItems(res))
  },[])
  return (
    <section className={`${styled.resumeSection} pt-20`}>
      <Container>
        <div className='grid grid-cols-1 lg:flex lg:justify-evenly  text-sky-50 w-full gap-20 '>
            <ResumeBox title={"My Experience"} icon={<PiGraduationCap size={45}/>}>
                {
                  ExperienceItems.map((item) => (
                    <ResumeItem key={item.id} time={item.time} title={item.title} institue={item.institue} />
                  ))
                }
            </ResumeBox>

            <ResumeBox title={"My Education"} icon={<CiMedal size={45} />}>
            {
                  EducationItems.map((item) => (
                    <ResumeItem key={item.id} time={item.time} title={item.title} institue={item.institue} />
                  ))
                }
            </ResumeBox>
        </div>

      </Container>
    </section>
  )
}

export default Resume
