import React from "react";
import Header from "../header/header";
import ReferalModal from "../modals/referal-modal";
import Footer from "../footer";
import { Toaster } from "sonner"


const RootLayout = ({ children }) => {
  return (
    <div className="relative">
      <ReferalModal />
      <div>
        <Header />
        <Toaster position="top-right" richColors/>
        {children}
        <Footer/>
      </div>
    </div>
  );
};

export default RootLayout;
