import React from "react";
import TemplateName from "../../Atoms/TemplateName";
import Heading from "../../Atoms/Heading";
import TestimonialCard from "../../Molecules/TestimonialCard";
import RatingStar from "../../Atoms/RatingStar";

export const Testimonials = () => {
  const testimonialCard  = [
    { tCardIcon:<svg aria-hidden="true" class="w-8 h-8 text-gray-200 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>, tCardContent:"Dorry work was some of the best we've seen.Lorem Ipsum is simply dummy.", tCardStyle:"block w-80 h-52 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 text-left", tCardContentStyle:"mb-4 text-xm text-slate-400", tCardNameStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50", tCardName:"Rizal Kens", tCardDesStyle:"mb-4 text-sm text-slate-500", tCardDes:"CEO Tradingcuy", rate:"4.8"},
    { tCardIcon:<svg aria-hidden="true" class="w-8 h-8 text-gray-200 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>, tCardContent:"The service is realy good and I think is the best agency than others. Thank you so much.", tCardStyle:"block w-80 h-52 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 text-left", tCardContentStyle:"mb-4 text-xm text-slate-400", tCardNameStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50", tCardName:"Mikami Yue", tCardDesStyle:"mb-4 text-sm text-slate-500", tCardDes:"Founder Hiroshima LLC", rate:"4.8"},
    { tCardIcon:<svg aria-hidden="true" class="w-8 h-8 text-gray-200 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>, tCardContent:"Working with Dorry was a greate experience! Their designer are creative and handsome.", tCardStyle:"block w-80 h-52 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700 text-left", tCardContentStyle:"mb-4 text-xm text-slate-400", tCardNameStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50", tCardName:"Muhammad Draken", tCardDesStyle:"mb-4 text-sm text-slate-500", tCardDes:"Founder Touman LLC", rate:"4.8"},
  ];
  const ratingStar = [
    {rate:"4.5"},
    {rate:"4.7"},
    {rate:"4.6"},
  ];
  return (
    <div className="mx-40 my-20">
      <TemplateName templatename='- Testimonials'/>
      <div className="flex row space-x-80 my-8"><Heading style = "pr-96 mr-44 font-sans flex-wrap text-5xl tracking-wide" heading='What our clients say about us'/> </div>
      <div className="flex items-stretch gap-x-8 flex-wrap gap-y-4 mt-6">
         {testimonialCard.map((tCards)=><TestimonialCard tCardIcon={tCards.tCardIcon} tCardDes={tCards.tCardDes} tCardContent={tCards.tCardContent} tCardStyle={tCards.tCardStyle} tCardDesStyle={tCards.tCardDesStyle} tCardName={tCards.tCardName} tCardNameStyle={tCards.tCardNameStyle} tCardContentStyle={tCards.tCardContentStyle} rate={tCards.rate}/>)}
      </div>
    </div>
  );
};

export default Testimonials;
