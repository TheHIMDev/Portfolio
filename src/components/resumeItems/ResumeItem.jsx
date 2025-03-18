import React from 'react'
import styled from "./resumeItem.module.css"

function ResumeItem({time,title,institue}) {
  return (
    <div className={`${styled.resumeItem} w-[100%] min-h-[150px]`}>
      <div className={`${styled.time}`}>{time}</div>
      <div className={`${styled.resumeTitle}`}>{title}</div>
      <div className={`institue`}>{institue}</div>
    </div>
  )
}

export default ResumeItem
