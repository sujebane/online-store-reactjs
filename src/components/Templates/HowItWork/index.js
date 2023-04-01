import React from "react";
import TemplateName from "../../Atoms/TemplateName";
import Heading from "../../Atoms/Heading";

const HowItWork = () => {
  return (
    <div className="bg-[url(https://wallpapercave.com/wp/5fVTO01.jpg)] text-white">
      <br></br>
      <div className="mx-40 my-20 flex items-stretch space-x-8">
        <div>
          <img
            src="https://www.practicalbusinessskills.com/assets/images/cards/creating-a-business-plan-sq-707-707.jpg"
            width="650"
            height="1800"
            alt="example"
          />
        </div>
        <br></br>
        <div>
        <TemplateName templatename="- How it Work" /><br></br>
        <Heading style = "font-sans flex-wrap text-5xl tracking-wide" heading = "Steps to get powerfull services"/>
        <br></br>
        <ol className="list-decimal ml-4">
  <li>Site Map and User Flow <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li><br></br>
  <li>Wireframing/Lofi <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li><br></br>
  <li>Visualize/Hifi <br></br>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
</ol>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default HowItWork;
