import React from 'react'
import styled from "./resumebox.module.css"

function ResumeBox({title,icon,children}) {
  return (
    <div className='flex flex-col lg:w-[50%]'>
        <div className={`section-header flex items-center gap-2 mb-12 w-full max-w-[700px]` }>
            {icon}
            <h2 className={`${styled.sectionTitle} font-semibold md:font-bold min-h-[100px] flex items-center`}>{title}</h2>
                          
        </div>
        <div className={`resume-widget`}>
            {children}
        </div>
    </div>
  )
}

export default ResumeBox
