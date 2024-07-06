import React from "react";

const ReferralInfoCard = ({title, description, icon}) => {
  return (
    <div className="flex flex-col rounded-full  justify-center gap-3 p-2 items-center group cursor-pointer">
      {icon}
      <h3 className="font-bold text-lg">{title}</h3>
      <hr  className=" border-2 border-blue-700 w-[40%] group-hover:scale-x-100 scale-x-0 transition" style={{transformOrigin: "left"}}/>
      <p className="text-center max-w-80">{description}</p>
    </div>
  );
};

export default ReferralInfoCard;
