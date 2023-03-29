import React from 'react'

const Statistics = ({heading,sublabel}) => {
  return (
    <div>
        <div className='text-4xl text-center'>{heading}</div>
        <div className='font-sans text-slate-400 font-bold mt-4'>{sublabel}</div>
    </div>
    
  )
}

export default Statistics