import React from 'react'
import {Link} from "react-router-dom"

const Button = ({styles,buttonname,onClick}) => {
  return (
    <div className={styles}><Link to={onClick}>{buttonname}</Link></div>
  )
}
{/* <Link to="/learn"><Learn/></Link> */}
export default Button