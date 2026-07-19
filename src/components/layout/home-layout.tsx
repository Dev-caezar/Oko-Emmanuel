import React from "react";
import { Footer, Header, ScrollToTop } from "../static";
import { Outlet } from "react-router-dom";
import CustomCursor from "../custom-cursor";

const HomeLayout: React.FC = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
