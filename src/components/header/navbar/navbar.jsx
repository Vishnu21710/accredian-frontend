import React, { useState } from "react";
import Button from "../../button/button";
import Logo from "../../logo/logo";
import { ChevronDown, ChevronUp, MenuIcon } from "lucide-react";
import {Link} from 'react-router-dom'
import MobileSideNav from "./mobile-side-nav";

const nav_links = [
  {
    title: "Refer And Earn",
    href: ""
  },
  {
    title: "Resources",
    href: ""
  },
  {
    title: "About Us",
    href: "https://accredian.com/whyaccredian"
  },
];

const Navbar = () => {
  const [open, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-3 flex justify-between items-center md:max-w-[85rem]  md:px-5 px-3 w-full mx-auto overflow-hidden">
      <div className="flex gap-x-5 items-center md:justify-start justify-between  md:w-auto w-full">
        <Logo />
       
        <MobileSideNav nav_links={nav_links}/>
        <Button
          onClick={() => setIsOpen(!open)}
          onBlur={onClose}
          className={"md:flex items-center gap-x-1 relative hidden"}
          variant="primary"
          size="md"
        >
          Courses
          {!open ? (
            <ChevronDown className="w-4 h-4 mt-[3px]" />
          ) : (
            <ChevronUp className="w-4 h-4 mt-[3px]" />
          )}
          
            <div
              className={`transition-all duration-150 ease-out shadow-md w-56 rounded-md p-2 z-40 absolute top-10 bg-white text-black text-start ${
                open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="text-sm hover:text-blue-500 transition py-2 border-b-[1px]">
                Full Stack Development
              </p>
              <p className="text-sm hover:text-blue-500 transition py-2 border-b-[1px]">
                Digital Marketing
              </p>
              <p className="text-sm hover:text-blue-500 transition py-2 ">
                Graphic Designing
              </p>
            </div>
       
        </Button>
      </div>

      <div className="md:flex hidden items-center gap-x-5">
        {nav_links.map((link, index) => (
          <Link key={index} to={link.href} target="_blank" className="list-none text-sm cursor-pointer hover:text-blue-600">
            {link.title}
          </Link>
        ))}
        <Button variant="secondary" size="md">
          Login
        </Button>
        <Button variant="primary" size="md">
          Try it for free
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
