import React from 'react';
import Heading from '../../Atoms/Heading';
import Button from '../../Atoms/Button';
import List from '../../Molecules/List';
import Org from '../../Atoms/Org';

const Footer = () => {
    const button = [
        {buttonname:"Let's Chat", styles:"border-solid rounded-full border-stone-300 bg-slate-300 text-black px-8 py-4"},
        {buttonname:"Schedule Meet", styles:"border-solid border rounded-full border-stone-300 text-black px-8 py-4"},
      ];
    const list = [
        {listName:"Company", listNameStyle:"font-semibold whitespace-nowrap"},
        {listName:"Our Work", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Services", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Community", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Career", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
    ];
    const list1 = [
        {listName:"Resources", listNameStyle:"font-semibold whitespace-nowrap"},
        {listName:"Help Center", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Blog", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Terms & Conditions", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
    ]; 
    const list2 = [
        {listName:"Links", listNameStyle:"font-semibold whitespace-nowrap"},
        {listName:"Pricing", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"About", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Learn", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Coporate", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"News", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
    ];
    const list3 = [
        {listName:"Follow us", listNameStyle:"font-semibold whitespace-nowrap"},
        {listName:"Dribble", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Instagram", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
        {listName:"Twitter", listNameStyle:"font-light text-slate-400 whitespace-nowrap"},
    ];
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/5fVTO01.jpg)] text-white">
    <div className="mx-40 mt-20">
      <div className="flex flex-row space-x-28 my-2"><Heading style = "font-sans text-3xl tracking-wide mt-14" heading='Are you interested to work with us?'/> <div className='gap-x-8 mx-8 justify-items-end whitespace-nowrap flex flex-row mt-14'>{button.map((button)=><Button buttonname={button.buttonname} styles={button.styles}/>)}</div></div>
      <hr class="h-px my-14 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex flex-row space-x-20">
        <div><Org/><br></br><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p></div>
        <div>{list.map((lists)=><List listName={lists.listName} listNameStyle={lists.listNameStyle}/>)}</div>
      <div>{list1.map((lists)=><List listName={lists.listName} listNameStyle={lists.listNameStyle}/>)}</div>
      <div>{list2.map((lists)=><List listName={lists.listName} listNameStyle={lists.listNameStyle}/>)}</div>
      <div>{list3.map((lists)=><List listName={lists.listName} listNameStyle={lists.listNameStyle}/>)}</div></div>
    </div>
    </div>

  )
}

export default Footer
