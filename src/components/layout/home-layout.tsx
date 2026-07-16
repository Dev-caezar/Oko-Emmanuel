import React from "react";
import { Footer, Header } from "../static";
import { Outlet } from "react-router-dom";

const HomeLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
