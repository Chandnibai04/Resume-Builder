import React from 'react'
import styles from './inputControl.module.css'

export default  function InputControl({label, value="", ...props}) {
  return (
    <>
        <div className={styles.container}>
            { label && <label>{label}</label> }
            <input value={value} type="text" {...props} />
        </div>
    </>
  )
}
