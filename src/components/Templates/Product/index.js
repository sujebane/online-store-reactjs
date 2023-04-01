import React from "react";
import TemplateName from "../../Atoms/TemplateName";
import Heading from "../../Atoms/Heading";
import Card from "../../Atoms/Card";

const Product = () => {
  const card = [
    { cardIcon: <img className="h-56 w-52" src="https://cdn.lapaninja.com/assets/images/hemster-thumb.jpg" alt="example"/>, cardTitle: "Fashion Landing Page", cardContent: "We made this landing page for fashion market place we called Fesyen",cardStyle:"block w-60 h-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700 items-center place-content-center text-center flex-row", inCardStyle:"flex items-center justify-center", cardTitleStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-left px-6 pt-2", cardContentStyle:"text-xs text-slate-500 text-left px-6",cardIconStyle:"text-blue border-slate-100 hover:bg-blue flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-none border shadow-l bg-slate-200"},
    { cardIcon: <img className="h-56 w-52" src="http://unbounce.com/photos/AAA-Life-Insurance-Landing-Page.png" alt="example"/>, cardTitle: "Insurance Landing Page", cardContent: "Secure.In is a company who will help you to stay safe with her service",cardStyle:"block w-60 h-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700 items-center place-content-center text-center flex-row", inCardStyle:"flex items-center justify-center", cardTitleStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-left px-6 pt-2", cardContentStyle:"text-xs text-slate-500 text-left px-6",cardIconStyle:"text-blue border-slate-100 hover:bg-blue flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-none border shadow-l bg-slate-200"},
    { cardIcon: <img className="h-60 w-56" src="https://cdn.dribbble.com/users/3041390/screenshots/16284433/media/8e0ddf37cf2b532382f9503ea2598476.png?compress=1&resize=400x300" alt="example"/>, cardTitle: "NFT Dashboard", cardContent: "As the current trend we make nft dashboard project to sell your art here",cardStyle:"block w-60 h-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700 items-center place-content-center text-center flex-row", inCardStyle:"flex items-center justify-center", cardTitleStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-left px-6 pt-2", cardContentStyle:"text-xs text-slate-500 text-left px-6",cardIconStyle:"text-blue border-slate-100 hover:bg-blue flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-none border shadow-l bg-slate-200"},
    { cardIcon: <img className="h-56 w-52" src="https://img.freepik.com/premium-vector/donation-smartphone-interface-vector-template-fundraising-service-white-design-layout-mobile-charity-app-page-charitable-organization-website-application-flat-ui-phone-display-screen_106317-11262.jpg" alt="example"/>, cardTitle: "Donation Mobile App", cardContent: "Donari is a donation mobile app in inazuma, we have vision to help others",cardStyle:"block w-60 h-80 rounded-lg bg-white shadow-lg dark:bg-neutral-700 items-center place-content-center text-center flex-row", inCardStyle:"flex items-center justify-center", cardTitleStyle:"mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-left px-6 pt-2", cardContentStyle:"text-xs text-slate-500 text-left px-6",cardIconStyle:"text-blue border-slate-100 hover:bg-blue flex h-56 w-full cursor-pointer flex-col items-center justify-center rounded-none border shadow-l bg-slate-200"},
  ];
  return (
    <div className="my-20">
      <div className="text-center">
        <br></br>
      <TemplateName templatename="- Products" /><br></br>
      <Heading style = "font-sans text-5xl tracking-wide" heading = "Our products we've created before"/>
        </div>
    <div>
      <br></br>
      <div className="mx-40 my-6 flex items-stretch space-x-2">
        <div className="border-slate-100 hover:bg-blue flex h-screen w-full cursor-pointer flex-col items-center justify-center rounded-none border shadow-l bg-slate-200"> 
          <img
            src="https://i0.wp.com/timedoor.net/wp-content/uploads/2022/09/Mobile-Apps-Development-2.png?fit=1920%2C1380&ssl=1"
            width="800"
            height="2500"
            alt="example"
          />
        </div>
        <br></br>
        <div>
        <div className="flex items-stretch gap-x-2 flex-wrap gap-y-4">
        {card.map((cards)=><Card cardIcon={cards.cardIcon} cardTitle={cards.cardTitle} cardContent={cards.cardContent} cardStyle={cards.cardStyle} inCardStyle={cards.inCardStyle} cardTitleStyle={cards.cardTitleStyle} cardContentStyle={cards.cardContentStyle} cardIconStyle={cards.cardIconStyle}/>)}
        </div>
      </div>
      <br></br>
    </div>
    </div>
    </div>
  );
};

export default Product;
