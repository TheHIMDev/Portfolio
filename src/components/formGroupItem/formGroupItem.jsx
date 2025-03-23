import React from 'react'
import styled from "./formGroupItem.module.css"

function FormGroupItem({children,}) {
  return (
    <div className={styled.formGroup}>
      {children}
    </div>
  )
}

export default FormGroupItem
