import React from 'react'
import styles from "./hiSvg.module.css"

function HiSvg() {
  return (
    <div className={styles.intro_text}>
        <svg viewBox='0 0 1320 300' className='mt-10'>
            <text x="50%" y="50%" textAnchor='middle' className={styles.animate_stroke}>
                HI
            </text>
        </svg>
    </div>
  )
}

export default HiSvg
