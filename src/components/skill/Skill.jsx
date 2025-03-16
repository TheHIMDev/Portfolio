import React from 'react'
import styled from "./skill.module.css"

function Skill({number,src , alt,skillName}) {
  return (
    <div className={`${styled.skillItem} text-sky-50 `}>
        <div className={`${styled.skillInner} min-h-60 flex flex-col justify-center`}>
            <div className={`${styled.iconBox}`}>
                <img width={100} height={100} src={src} alt={alt} />
            </div>
            <div className={`${styled.number} `}>{number}</div>
        </div>
        <div>
            <h1 className='text'>{skillName}</h1>
        </div>
    </div>

  )
}

export default Skill
