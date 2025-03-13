import React, { useEffect, useState } from 'react'
import styled from "./preLoader.module.css"

function PreLoader() {
    // Loader effect when page start

  const [showLoader , setShowLoader ] = useState(true)

  useEffect(()=>{
    
    const timer = setTimeout(()=> {
      setShowLoader(false)
    },2000)

    return ()=> clearTimeout(timer)

  },[])

  return (
    <>
            {
        (showLoader && (
          <div className='preloader fixed z-10 h-screen w-full top-0 left-0 flex overflow-hidden bg-transparent justify-center items-center'>
            <svg className='absolute top-0 w-screen h-screen fill-stone-950 ' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
              <path d='M0,1005S175,955,500,995s500,5,500,5V0H0Z'></path>
            </svg>

          <div className='preloader-heading'></div>
              <div className={`${styled.loadText} text-stone-50 text-[20px] font-extralight tracking-[15px] z-20`}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>

              </div>
          </div>
        ))

        
      }

      {
        (!showLoader && <></>)
      }
    </>
  )
}

export default PreLoader
