import React from 'react'

const Button = ({styles,buttonname}) => {
  return (
    <div className={styles}>{buttonname}</div>
  )
}

export default Button