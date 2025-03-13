import React from 'react'
import FunFactItem from '../funfactItem/FunFactItem'

function FunFactArea() {

  
  return (
    <div className='funfact-area mt-30 grid grid-cols-2 md:grid-row- md:grid-cols-4 w-full gap-6 text-sky-50  '>
      <FunFactItem number="14" text="Years of Experience" />
      <FunFactItem number="1.5k" text="&nbsp;&nbsp; Happy Clients" />
      <FunFactItem number="50+" text="Project Completed" />
      <FunFactItem number="95%" text="Customer Satisfaction Rate" />
    </div>
  )
}

export default FunFactArea
