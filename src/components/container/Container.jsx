import React from 'react'

function Container({children}) {
  return (
    <div className='container mx-auto px-5 sm:px-10 xl:px-20 lg:px-20'  >
      {children}
    </div>
  )
}

export default Container
