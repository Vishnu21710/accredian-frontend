import React, { useState } from "react";

import { XCircleIcon } from "lucide-react";
import clsx from "clsx";

const Banner = ({ title, className }) => {
  
    const [visible, setIsVisible] = useState(true)

    return (
    <section className={clsx("w-full md:flex hidden py-4 text-center  items-center bg-blue-200/40 px-4 transition-transform duration-150  ", visible ? "scale-y-100" : "scale-y-0 ", className)} style={{transformOrigin: "top"}}>
      <p className="text-center w-full text-sm  font-semibold">
        {title} <span className="text-blue-600 ml-3 cursor-pointer">Contact Expert</span>
      </p>
      <button className="">
        <XCircleIcon onClick={()=>setIsVisible(!visible)} className="font-light w-5 h-5 text-rose-500 cursor-pointer" />
      </button>
    </section>
  );
};

export default Banner;
