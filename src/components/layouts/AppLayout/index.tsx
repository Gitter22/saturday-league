import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import BottomNavigation from "./BottomNavigation";

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomNavigation />
    </>
  );
};

export default AppLayout;
