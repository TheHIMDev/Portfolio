import React from 'react'
import styled from "./SectionHeader.module.css"

function SectionHeader({title , description}) {
  return (
    <div className={`flex justify-center flex-col mb-15 items-center text`}>
        <h2 className={`${styled.sectionTitle} font-bold mb-10`} > {title}</h2>
        <p className='font-semibold max-w-[800px] text-center text-sky-50'>{description}</p>
    </div>
  )
}

export default SectionHeader
