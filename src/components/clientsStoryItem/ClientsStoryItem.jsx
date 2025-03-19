import React from 'react'
import styled from "./clientsStoryItem.module.css" 
import Triangle from '../triangle/Triangle'

function ClientsStoryItem({logoSrc,logoAlt,imageSrc,imageAlt,qoute,clientName,clientDetails}) {
  return (
    <div className={`${styled.testimonialItem}`}>
        <div className={`top-area flex justify-between  mb-[20px] min-h-[50px]`}>
            <div className={`${styled.logoBox }`}>
                <img className="w-[50px] h-[50px] object-cover" src={logoSrc} alt={logoAlt} />
            </div>
            <div className={`${styled.imageBox} w-[50px] h-[50px] `}>
                <img className="w-[50px] h-[50px] object-cover"  src={imageSrc} alt={imageAlt} />
            </div>
        </div>
        <div className='flex gap-1'>
              <Triangle/>
              <Triangle/>
        </div>

        <p className={`${styled.quote} mt-5 `}>{qoute}</p>
        <h3 className={`name mb-2 font-semibold text-lg`}>{clientName}</h3>
        <span className={`details `}>{clientDetails}</span>

      
    </div>
  )
}

export default ClientsStoryItem
