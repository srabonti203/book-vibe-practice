import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="w-10/12 mx-auto py-5 space-y-5">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
