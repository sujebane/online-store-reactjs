import React from 'react'
import Org from '../../Atoms/Org'
import Button from '../../Atoms/Button'
import {Link} from "react-router-dom"

export const NavBar = () => {
  const button = [
    {styles:"pt-3.5",buttonname:"Pricing", onClick:"/pricing"},
    {styles:"pt-3.5",buttonname:"About", onClick:"/about"},
    {styles:"pt-3.5",buttonname:"Learn", onClick:"/learn"},
    {styles:"pt-3.5",buttonname:"Corporate", onClick:"/corporate"},
    {styles:"pt-3.5 pr-10",buttonname:"News", onClick:"/news"},
    {styles:"border-solid rounded-full px-8 border-2 border-stone-400 p-2", buttonname:"Contatct Us", onClick:"/contactus"}
  ];
  return (
    <nav>
      <div className='flex items-stretch gap-x-20 p-4 align-middle'>
      <Link to="/"><Org/></Link>
      {button.map((button)=><Button buttonname={button.buttonname} styles={button.styles} onClick={button.onClick}/>)}</div>
    </nav> 
  )
}
export default NavBar
