import React from 'react'
import Org from '../../Atoms/Org'
import Button from '../../Atoms/Button'
import {Link} from "react-router-dom"

export const NavBar = () => {
  const button = [
    {buttonname:"Pricing"},
    {buttonname:"About"},
    {buttonname:"Learn"},
    {buttonname:"Corporate"},
    {buttonname:"News"},
    {styles:"border-solid rounded-2xl border-2 border-stone-400 mx-28", buttonname:"Contatct Us"}
  ];
  return (
    <nav>
      <div className='flex items-stretch gap-x-20 p-8'>
      <Link to="/"><Org/></Link>
      {button.map((button)=><Button buttonname={button.buttonname} styles={button.styles}/>)}</div>
    </nav>  
        // <Link to="/"><Org/></Link>
        // <Link to="/pricing"><Pricing/></Link>
        // <Link to="/about"><About/></Link>
        // <Link to="/learn"><Learn/></Link>
        // <Link to="/corporate"><Corporate/></Link>
        // <Link to="/news"><News/></Link>
        // <Link to="/contactus"><Contactus/></Link>
    // const button = [{buttonName:"ABC"}, onPress: ()=>{}}] 
  )
}
export default NavBar
