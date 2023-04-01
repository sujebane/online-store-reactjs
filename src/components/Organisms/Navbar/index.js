import React from 'react'
import Org from '../../Atoms/Org'
import Button from '../../Atoms/Button'
import {Link} from "react-router-dom"

export const NavBar = () => {
  const button = [
    {styles:"pt-3.5",buttonname:"Pricing"},
    {styles:"pt-3.5",buttonname:"About"},
    {styles:"pt-3.5",buttonname:"Learn"},
    {styles:"pt-3.5",buttonname:"Corporate"},
    {styles:"pt-3.5 pr-10",buttonname:"News"},
    {styles:"border-solid rounded-full px-8 border-2 border-stone-400 p-2", buttonname:"Contatct Us"}
  ];
  return (
    <nav>
      <div className='flex items-stretch gap-x-20 p-4 align-middle'>
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
