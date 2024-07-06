import React from "react";

const hero_bar_links = [
  {
    title: "Refer",
  },
  {
    title: "Benefits",
  },
  {
    title: "FAQ's",
  },
  {
    title: "Support",
  },
];

const HeroBar = () => {


    return (
    <div className="w-[797px] mt-10 px-3 py-2 text-sm rounded-full justify-around flex items-center gap-x-7 bg-blue-200/40 mx-auto">
      {hero_bar_links.map((link) => (
        <div>
          <button className="rounded-full focus:bg-blue-200/90 focus:text-blue-600 hover:bg-blue-200/90 hover:text-blue-600 transition font-semibold py-1 px-4">{link.title}</button>
        </div>
      ))}
    </div>
  );
};

export default HeroBar;
