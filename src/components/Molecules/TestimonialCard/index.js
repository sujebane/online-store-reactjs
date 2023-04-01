import React from "react";
import RatingStar from "../../Atoms/RatingStar";

export const TestimonialCard = ({ tCardIcon, tCardContent, tCardStyle, tCardContentStyle, tCardNameStyle, tCardName, tCardDesStyle, tCardDes, rate}) => {
  return (
    <div>
      <div class={tCardStyle}>
      <div>{tCardIcon}</div>
        <p class={tCardContentStyle}>
          {tCardContent}
        </p>
        <div className="flex items-stretch align-middle"> 
        <h5 class={tCardNameStyle}>{tCardName}</h5><RatingStar rate={rate}/>
        </div>
        <h5 class={tCardDesStyle}>
          {tCardDes}
        </h5>
      </div>
    </div>
  );
};

export default TestimonialCard;