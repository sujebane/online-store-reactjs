import React from 'react'
import {Link} from "react-router-dom"

const Button = ({styles,buttonname,onClick}) => {
  return (
    <div className={styles}><Link to={onClick}>{buttonname}</Link></div>
  )
}

export default Button