import React from 'react'
import styled from "./funfactItem.module.css"

function FunFactItem({number,text}) {
  return (
    <div className='funfact-item'>
      <div className={styled.number}><span>{number}</span></div>
      <div className='text'> <span>{text} </span></div>
    </div>
  )
}

export default FunFactItem
