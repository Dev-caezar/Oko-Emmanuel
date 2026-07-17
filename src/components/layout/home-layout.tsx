import React from "react";
import { Footer, Header } from "../static";
import { Outlet } from "react-router-dom";
import CustomCursor from "../custom-cursor";

const HomeLayout: React.FC = () => {
  return (
    <div className="relative">
      <CustomCursor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
