import React from 'react'
import Heading from '../../Atoms/Heading';
import Text from '../../Atoms/Text';
import Image from '../../Atoms/Image';
import Button from '../../Atoms/Button';
import { Navbar, StatBar } from '../../Organisms';

const Landing = () => {
  const button = [
    {buttonname:"Get Started", styles:"border-solid rounded-full border-2 p-2 px-4 bg-white text-black"},
    {buttonname:"Lern more"},
  ];
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/5fVTO01.jpg)] text-white">
    <div>
    <Navbar/>
    <Heading style = "font-sans text-6xl text-center mx-56 mt-12" heading = "We create digital product and solve your problem" />
    <Text style = "font-sans mx-96 text-center my-9" content = "A fully integrated digital agency that will help you create beautiful websites and solve problem in your company" /> 
    <div className='flex items-stretch gap-x-96 mx-96'>{button.map((button)=><Button buttonname={button.buttonname} styles={button.styles}/>)}</div>
    <Image/>
    <StatBar/>
    </div>
    </div>
  )
}

export default Landing