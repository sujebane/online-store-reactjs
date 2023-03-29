import React from 'react'
import Heading from '../../Atoms/Heading';
import NavBar from '../../Organisms/NavBar';
import Text from '../../Atoms/Text';
import {Link} from "react-router-dom";
import Image from '../../Atoms/Image';
import StatBar from '../../Organisms/StatBar';
import Button from '../../Atoms/Button'


const Landing = () => {
  const button = [
    {buttonname:"Get Started", styles:"border-solid rounded-2xl border-2 border-stone-400"},
    {buttonname:"Lern more"},
  ];
  return (
    <div>
    <NavBar/>
    <Heading /> 
    <Text content = "A fully integrated digital agency that will help you create beautiful websites and solve problem in your company" /> 
    <div className='flex items-stretch gap-x-96 mx-96'>{button.map((button)=><Button buttonname={button.buttonname} styles={button.styles}/>)}</div>
    <Image/>
    <StatBar/>
    </div>
  )
}

export default Landing