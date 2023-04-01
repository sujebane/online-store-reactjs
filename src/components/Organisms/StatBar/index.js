import Statistics from "../../Atoms/Statistics";
import React from "react";

export const StatBar = () => {
  const statistics = [
    { heading: "2.5K+", sublabel: "Job Done Successfully" },
    { heading: "2.2K+", sublabel: "Happy Clients" },
    { heading: "94%", sublabel: "Daily Active Engagement" },
    { heading: "58K", sublabel: "Trusted by Company" },
  ];
  return (
    <div className="flex items-stretch py-4 mx-60 gap-x-20">
      {statistics.map((stats)=><Statistics heading={stats.heading} sublabel={stats.sublabel}/>)}
 
    </div>
  );
};

export default StatBar;
