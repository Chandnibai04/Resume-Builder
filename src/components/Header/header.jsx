import React from 'react'
import styles from './header.module.css'
import resumeimg from '../../assets/resumeimg.svg'

export default function Header() {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.heading}>A <span>Resume</span> that stands out!</p>
                <p className={styles.heading}>make your own resume. <span>It's free</span></p>
            </div>
            <div className={styles.right}>
                <img src={resumeimg} alt="Resume" />
            </div>
        </div>
    </>
  )
}