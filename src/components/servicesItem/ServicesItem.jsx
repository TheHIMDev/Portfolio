import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import styled from "./serviceItem.module.css"

function ServicesItem({number,title,content}) {
  return (
    <div className={`${styled.serviceItem} flex jus `}>
      <div className='py-[30px] w-[35%] font-bold'>
        <span className={styled.number}>0{number}</span>
        <h1 className={`${styled.serviceTitle} text-base sm:text-2xl md:text-3xl`}>{title}</h1>
      </div>
      <div className='py-[30px] w-[65%] text-lg pr-2 sm:pr-25 md:pr-40 lg:pr-60 whitespace-pre-wrap '>
        <p>{content}</p>
      </div>
      <i className='hidden sm:block right-5 md:right-12'>
        <FiArrowUpRight size={40} />
      </i>
      <button className={styled.serviceLink}></button>

    </div>
  )
}

export default ServicesItem
