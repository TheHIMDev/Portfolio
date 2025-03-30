import React, { useEffect, useState } from 'react'
import FunFactItem from '../funfactItem/FunFactItem'
import { getFunFactItems } from '../../services/api'

function FunFactArea() {

  const [items, setItems] = useState([])

  useEffect(()=> {
    getFunFactItems().then(res => setItems(res) )
  },[])
  
  return (
    <div className='funfact-area mt-30 grid grid-cols-2 md:grid-row- md:grid-cols-4 w-full gap-6 text-sky-50  '>
      {
        items.map((item) =>(
          <FunFactItem key={item.id} number={item.number} text={item.text} />
        ))
      }
    </div>
  )
}

export default FunFactArea
