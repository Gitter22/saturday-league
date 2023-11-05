import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import FixedBottomNavigation from "./Footer/Footer";

const AppLayout = () => {
  console.log("rendered");
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <FixedBottomNavigation />
    </>
  );
};

export default AppLayout;
