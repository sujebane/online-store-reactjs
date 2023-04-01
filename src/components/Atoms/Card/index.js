import React from "react";

const Card = ({ cardIcon, cardTitle, cardContent, cardStyle, cardIconStyle, inCardStyle, cardTitleStyle, cardContentStyle}) => {
  return (
    <div>
      <div class={cardStyle}>
        <div class={inCardStyle}>
          <label class={cardIconStyle}>
            {cardIcon}
          </label>
        </div>

        <h5 class={cardTitleStyle}>
          {cardTitle}
        </h5>
        <p class={cardContentStyle}>
          {cardContent}
        </p>
      </div>
    </div>
  );
};

export default Card;
